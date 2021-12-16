const fs = require('fs');

let file = '';
const buildList = [];

function parseName(fileName) {
    let newName = fileName.replace(/.svg/, '');
    const name = newName.replace(/-([a-z])/g, function (w) {
        return w[1].toUpperCase();
    });
    buildList.push({ iconList: newName, compName: name });
    return name;
}

function fileData(fileName, data) {
    const name = parseName(fileName);
    file += `export const ${name}: React.FC = ({ width, className }) => {
        return ${data.trim()}\n}\n\n`;
}

function functionOne(testInput) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Inside the promise');
            if (resolvedFlag == true) {
                resolve('Resolved');
            } else {
                reject('Rejected');
            }
        }, 2000);
    });
}

function readFiles(dirname, onFileContent, onError) {
    return new Promise((resolve, reject) => {
        fs.readdir(dirname, function (err, filenames) {
            if (err) {
                reject('Rejected');
                return;
            }
            filenames.forEach(function (filename, index) {
                fs.readFile(dirname + `/\\${filename}`, 'utf-8', function (err, content) {
                    if (err) {
                        reject('Rejected');
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

readFiles('./svgs', fileData).then(() => {
    file += `

export const iconList = [${buildList.map((entry) => `"${entry.iconList}"\n    `).join('||')}];
`;

    const saveFile = (fileName, code) => {
        fs.writeFile(fileName, code, (error) => {
            if (error) {
                console.log(error);
            }
        });
    };

    saveFile('Icons.gen.tsx', file);
});
