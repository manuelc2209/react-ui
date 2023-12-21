import React from 'react';
import { useNavigate } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { nanoid } from 'nanoid';

import { Button, Header } from '../../components';

import {
    StyledCodeContainer,
    StyledContainer,
    StyledHighlighter,
    StyledOverlay,
    StyledVideo,
    StyledVideoContainer
} from './styles';
import { AvailableCodeSamples } from './samples';

export const CodeSample = () => {
    const navigate = useNavigate();

    return (
        <StyledContainer>
            <Header>
                <Button size="large" label="Back" onClick={() => navigate('/projects')} />
            </Header>
            <StyledVideoContainer>
                <StyledVideo src="/blurred_video.mp4" autoPlay loop playsInline muted />
                <StyledOverlay>
                    <StyledCodeContainer>
                        {AvailableCodeSamples.map((codeSample) => (
                            <StyledHighlighter key={nanoid()}>
                                <SyntaxHighlighter
                                    language="typescript"
                                    showLineNumbers
                                    wrapLines
                                    style={stackoverflowDark}
                                >
                                    {codeSample}
                                </SyntaxHighlighter>
                            </StyledHighlighter>
                        ))}
                    </StyledCodeContainer>
                </StyledOverlay>
            </StyledVideoContainer>
        </StyledContainer>
    );
};
