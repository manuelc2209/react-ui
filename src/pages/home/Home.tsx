import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Header, Portefolio } from '../../components';

import { HomeProps } from './types';
import { StyledColumn, StyledContainer, StyledOverlay, StyledVideo, StyledVideoContainer } from './styles';

export const Home: React.FC<HomeProps> = ({ profile }) => {
    const navigate = useNavigate();

    return (
        <StyledContainer>
            <Header>
                <Button size="large" label="Projects" onClick={() => navigate('/projects')} />
            </Header>
            <StyledVideoContainer>
                <StyledVideo src="/blurred_video.mp4" autoPlay loop playsInline muted />
                <StyledOverlay>
                    <StyledColumn>
                        <Portefolio
                            label={profile.label}
                            img={profile.img}
                            headline={profile.headline}
                            currentStack={profile.currentTechStack}
                            otherStack={profile.otherToolsFrameworks}
                            cards={profile.cards}
                        />
                    </StyledColumn>
                </StyledOverlay>
            </StyledVideoContainer>
        </StyledContainer>
    );
};
