import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Header } from '../../components';

import { projects } from './data';
import { StyledContainer, StyledOverlay, StyledCard, StyledVideoContainer, StyledVideo } from './styles';

export const ProjectsUI = () => {
    const navigate = useNavigate();

    return (
        <StyledContainer>
            <Header>
                <Button size="large" label="Back" onClick={() => navigate('/')} />
            </Header>
            <StyledVideoContainer>
                <StyledVideo src="/blurred_video.mp4" autoPlay loop playsInline muted />
                <StyledOverlay>
                    {projects.map((entry) => (
                        <StyledCard
                            title={entry.title}
                            subtitle={entry.subtitle}
                            key={entry.title}
                            image={entry.image}
                            href={{
                                github: entry.github,
                                website: entry.path
                            }}
                            isActionCard
                        />
                    ))}
                </StyledOverlay>
            </StyledVideoContainer>
        </StyledContainer>
    );
};
