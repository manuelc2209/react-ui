import React, { CSSProperties, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { nanoid } from 'nanoid';
import { NodeApi, Tree } from 'react-arborist';

import { Button, Header } from '../../../components';

import {
    StyleNode,
    StyledCodeContainer,
    StyledContainer,
    StyledHighlighter,
    StyledOverlay,
    StyledVideo,
    StyledVideoContainer
} from './styles';
import { AvailableCodeSamples, tree } from './samples';

export const CodeSample = () => {
    const navigate = useNavigate();
    const [selectedCodeId, setSelectedCodeId] = useState<string | undefined>(AvailableCodeSamples[0].id);

    const handleOnSelect = (nodes: NodeApi[]) => {
        if (nodes?.[0]?.level) {
            setSelectedCodeId(nodes?.[0]?.data?.id);
        }
    };

    const Node = ({ node, style }: { node: NodeApi; style: CSSProperties }) => {
        return (
            <StyleNode
                style={style}
                onClick={() => node.toggle()}
                hasCursor={node.data.id !== selectedCodeId}
            >
                {node.isLeaf ? '- ' : undefined}
                {node.data.name}
            </StyleNode>
        );
    };

    return (
        <StyledContainer>
            <Header>
                <Button size="large" label="Back" onClick={() => navigate('/projects')} />
            </Header>
            <StyledVideoContainer>
                <StyledVideo src="/blurred_video.mp4" autoPlay loop playsInline muted />
                <StyledOverlay>
                    <StyledCodeContainer>
                        <Tree initialData={tree} openByDefault disableDrag onSelect={handleOnSelect}>
                            {Node}
                        </Tree>
                        {AvailableCodeSamples.map((codeSample) => (
                            <StyledHighlighter key={nanoid()}>
                                {selectedCodeId === codeSample.id && (
                                    <SyntaxHighlighter
                                        language="typescript"
                                        showLineNumbers
                                        wrapLines
                                        style={stackoverflowDark}
                                    >
                                        {codeSample.sample}
                                    </SyntaxHighlighter>
                                )}
                            </StyledHighlighter>
                        ))}
                    </StyledCodeContainer>
                </StyledOverlay>
            </StyledVideoContainer>
        </StyledContainer>
    );
};
