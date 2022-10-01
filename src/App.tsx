import React, { useState } from 'react';
import styled from 'styled-components';
import './index.css';
import { Route, Routes, useNavigate } from 'react-router-dom';

import data from './data/index.json';
import { COLOR_PRIMARY_2 } from './GlobalStyles';
import { Button, DashboardUI, Header, Portefolio, ProjectsUI } from './components';

const StyledContainer = styled.div`
    height: inherit;
    display: flex;
    flex-direction: column;
`;

const StyledContent = styled.div`
    display: flex;
    flex-direction: row;
    background-image: url('https://64.media.tumblr.com/2df67fe7bdbba84c88cdbbdf84fd2743/tumblr_nqgvxz92HC1s85u2fo1_500.gif');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: inherit;
    overflow: auto;

    @media (max-width: 450px) {
        height: inherit;
        flex-direction: column;
        flex: 1;
        height: calc(100vh - 60px);
    }

    @media (max-width: 900px) {
        height: 100%;
    }
`;

const StyledOverlay = styled.div`
    display: flex;
    flex: 1;
    background-color: #1e476c6e;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const StyledColumn = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;

    @media (max-width: 450px) {
        width: 100%;
    }

    @media (max-width: 900px) {
        width: 100%;
    }
`;

const StyledHeader = styled(Header)`
    border-bottom: 1px solid ${COLOR_PRIMARY_2};
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 60px;
    align-items: center;

    > * {
        margin: 10px;
    }
`;

export const App: React.FC = () => {
    const [disabled, setDisabled] = useState(false);
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

    const Dashboard = <DashboardUI />;

    const buttonProps = {
        label: 'Go back',
        size: 'large',
        disabled: false,
        onClick: () => handleBack()
    };

    const Projects = <ProjectsUI buttonProperties={buttonProps} />;

    return (
        <Routes>
            <Route path="/" element={App} />
            <Route path="projects" element={Projects} />
            <Route path="dashboard" element={Dashboard} />
            <Route path="*" element={App} />
        </Routes>
    );
};
