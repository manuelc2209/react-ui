const fs = require('fs');

let file = `import React from 'react';
import styled from 'styled-components';\n

//THIS IS AN AUTOGENERATED FILE, DO NOT EDIT \n
`;

const buildList = [];

function parseName(fileName) {
    let newName = fileName.replace(/.svg/, '');
    let name = newName.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
    });
    if (name.includes('-')) {
        name = name.replace(/-/g, '');
    }
    buildList.push({ iconList: newName, compName: name });
    return name;
}

function parseData(data) {
    const buildSvg = [];
    let newData = data.split('\n');
    newData.forEach((entry, i) => {
        // Todo - Improve this logic also
        if (
            !entry.includes('?xml') &&
            !entry.includes('<!-- Generator') &&
            !entry.includes('Sketch') &&
            !entry.includes('<title>')
        ) {
            // Refactor this logic afterwards, it's just to match Component structure
            entry = entry.replace('xmlns:xlink', 'xmlnsXlink');
            entry = entry.replace('stroke-width', 'strokeWidth');
            entry = entry.replace('stroke-linejoin', 'strokeLinejoin');
            entry = entry.replace('stroke-linecap', 'strokeLinecap');
            entry = entry.replace('fill-rule', 'fillRule');
            entry = entry.replace('stroke-width', 'strokeWidth');
            entry = entry.replace(/width="(.*?)"/g, 'width={size}');
            entry = entry.replace(/height="(.*?)"/g, 'height={size}');

            return buildSvg.push(entry);
        }
    });

    return buildSvg.join('\n');
}

function fileData(fileName, data) {
    const name = parseName(fileName);
    const newData = parseData(data);
    file += `const ${name}: React.FC<any> = (size: number) => {
        return (${newData.trim()}\n)};\n\n`;
}

function readFiles(dirname, onFileContent, onError) {
    return new Promise((resolve, reject) => {
        fs.readdir(dirname, function (err, filenames) {
            if (err) {
                reject(err);
                return;
            }
            filenames.forEach(function (filename, index) {
                fs.readFile(dirname + `/${filename}`, 'utf-8', function (err, content) {
                    if (err) {
                        reject(err, content);
                        return;
                    }
                    onFileContent(filename, content);
                    if (filenames.length - 1 === index) {
                        resolve('Success');
                    }
                });
            });
        });
    });
}

readFiles('./svgs', fileData)
    .then(() => {
        file += `

interface SharedIconProps {
    className?: string;
}

interface StyledContainerProps {
    size?: number;
}

export const IconList = [${buildList.map((entry) => `"${entry.iconList}"\n    `).join(',')}];

export type IconsList = typeof IconList[number];

function getIcon(icon: IconsList, size: number) {
    switch(icon) {
        ${buildList
            .map(
                (entry) => `case "${entry.iconList}":
            return ${entry.compName}(size);
        `
            )
            .join('')}
    }
}

interface IconProps {
    icon?: IconsList;
    size?: number;
    className?: string;
}

const setSize = ({ size }: { size?: number }) => typeof size === 'string' ? size : \`\${size}px\`;

const StyledContainer = styled.div<StyledContainerProps>\`
    size: \${setSize};
\`;

export const Icon: React.FC<IconProps> = ({
    icon,
    size = 14,
    className
}) => {
    return (
        <StyledContainer className={className} size={size}>
            {getIcon(icon as IconsList, size)}
        </StyledContainer>
    );
};

`;

        const saveFile = (fileName, code) => {
            fs.writeFile(fileName, code, (error) => {
                if (error) {
                    console.log(error);
                }
            });
        };

        saveFile('Icon.gen.tsx', file);
    })
    .catch((err) => console.log(err));