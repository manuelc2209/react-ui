import React from 'react';
import './index.css';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { StyledColumn, StyledContainer, StyledContent, StyledHeader, StyledOverlay } from './AppStyles';
import data from './data/index.json';
import { Button, ForumUI, Portefolio, ProjectsUI } from './components';
import { ForumBody } from './components/ui';

export const App: React.FC = () => {
    const navigate = useNavigate();
    const { profile } = data;

    const handleProjects = () => {
        navigate('/projects');
    };

    const handleBack = () => {
        navigate('/');
    };

    // REFACTOR THIS INTO UI

    const App = (
        <StyledContainer>
            <StyledHeader>
                <Button size="large" label="Projects" onClick={() => handleProjects && handleProjects()} />
            </StyledHeader>
            <StyledContent>
                <StyledOverlay>
                    <StyledColumn>
                        <Portefolio
                            label={profile.label}
                            img={profile.img}
                            headline={profile.headline}
                            link={profile.link}
                            linkLabel={profile.linkLabel}
                            cards={profile.cards}
                        />
                    </StyledColumn>
                </StyledOverlay>
            </StyledContent>
        </StyledContainer>
    );

    const buttonProps = {
        label: 'Go back',
        size: 'large',
        disabled: false,
        onClick: () => handleBack()
    };

    return (
        <Routes>
            <Route path="/" element={App} />
            <Route path="/projects" element={<ProjectsUI buttonProperties={buttonProps} />} />
            <Route path="/forum" element={<ForumUI />}>
                <Route path="/forum" element={<ForumBody />} />
                <Route path="/forum/login" element={<div>wip</div>} />
                <Route path="/forum/signup" element={<div>wip</div>} />
            </Route>
        </Routes>
    );
};
