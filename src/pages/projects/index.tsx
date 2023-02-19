import React from 'react';

import { Button } from '../../components';

import { projects } from './data';
import { StyledContainer, StyledHeader, StyledContent, StyledOverlay, StyledCard } from './styles';
import { ProjectsUIProps } from './types';

export const ProjectsUI: React.FC<ProjectsUIProps> = ({ buttonProperties }) => {
    return (
        <StyledContainer>
            <StyledHeader>
                <Button
                    {...buttonProperties}
                    label="Go Back"
                    onClick={() => buttonProperties.onClick && buttonProperties.onClick()}
                />
            </StyledHeader>
            <StyledContent>
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
            </StyledContent>
        </StyledContainer>
    );
};
