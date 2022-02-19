import React, { useState } from 'react';
import styled from 'styled-components';
import './index.css';
import { Routes, Route } from 'react-router';
import { useNavigate } from 'react-router-dom';

import data from './data/index.json';
import { COLOR_PRIMARY_2 } from './GlobalStyles';
import {
    Button,
    DashboardUI,
    Header,
    LoginUI,
    Portefolio,
    RegisterUI,
    ProjectsUI,
    Skills
} from './components';

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

    @media (max-width: 450px) {
        flex-direction: column;
        flex: 1;
    }

    @media (min-width: 900px) {
        height: 100%;
    }
`;

const StyledOverlay = styled.div`
    display: flex;
    flex: 1;
    background-color: #20202085;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const StyledColumn = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
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
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const navigate = useNavigate();
    const { profile, skills } = data;

    function resetState() {
        setRegister(false);
        setLogin(false);
    }

    const handleOnClick = () => {
        setDisabled(true);
        // Fake timeout to simmulate a request while api is not ready
        setTimeout(() => setDisabled(false), 2500);
    };

    const handleProjects = () => {
        resetState();
        navigate('/projects');
    };

    const handleLogin = () => {
        setLogin(true);
        navigate(login ? '/' : '/login');
    };

    const handleBack = () => {
        setLogin(false);
        setRegister(false);
        navigate('/');
    };

    const handleRegister = () => {
        setRegister(true);
        navigate(register ? '/' : '/register');
    };

    // REFACTOR THIS INTO UI

    const App = (
        <StyledContainer>
            <StyledHeader>
                {login ? (
                    <Button size="large" label="Log out" onClick={() => handleBack && handleBack()} />
                ) : (
                    <>
                        <Button size="large" label="Log in" onClick={() => handleLogin && handleLogin()} />
                        <Button
                            size="large"
                            label="Sign up"
                            onClick={() => handleRegister && handleRegister()}
                        />
                        <Button
                            size="large"
                            label="Projects"
                            onClick={() => handleProjects && handleProjects()}
                        />
                    </>
                )}
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
                    <StyledColumn>
                        <Skills skills={skills} />
                    </StyledColumn>
                </StyledOverlay>
            </StyledContent>
        </StyledContainer>
    );

    const loginButtonProps = {
        label: 'Go back',
        size: 'large',
        disabled: false,
        onClick: () => handleBack()
    };

    const loginFormProps = {
        nameLabel: 'Username:',
        nicknamePlaceholder: 'Please type in your Nickname here:',
        passwordLabel: 'Password:',
        passwordPlaceholder: 'Please type in your password here:',
        disabled: false,
        onClick: () => handleOnClick()
    };

    const Login = <LoginUI buttonProperties={loginButtonProps} formProperties={loginFormProps} />;

    const registerButtonProps = {
        label: 'Go back',
        size: 'large',
        disabled: false,
        onClick: () => handleBack()
    };

    const formProps = {
        name: 'Username',
        disabled: false,
        validatePassword: true,
        doubleValidation: true,
        passwordLabel: 'Password:',
        nicknamePlaceholder: 'Username Placeholder',
        passwordPlaceholder: 'Password Placeholder',
        repeatPasswordPlaceholder: 'Repeat your password here',
        onClick: () => handleOnClick()
    };

    const Register = <RegisterUI buttonProperties={registerButtonProps} formProperties={formProps} />;
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
            <Route path="register" element={Register} />
            <Route path="login" element={Login} />
            <Route path="projects" element={Projects} />
            <Route path="dashboard" element={Dashboard} />
            <Route path="*" element={App} />
        </Routes>
    );
};
