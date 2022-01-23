import React, { useState } from 'react';
import styled from 'styled-components';
import './index.css';
import { profile, skills } from './data/index.json';

import { Button } from './components/Button';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { COLOR_PRIMARY_2 } from './GlobalStyles';
import { Portefolio } from './components/Portefolio';
import { Skills } from './components/Skills';
import { Routes, Route } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { RegisterUI } from './components/ui/register';

const StyledContainer = styled.div`
    height: inherit;
    display: flex;
    flex-direction: column;
`;

const StyledRegister = styled(Register)``;
const StyledLogin = styled(Login)``;

const StyledContent = styled.div`
    display: flex;
    flex-direction: row;
    background-image: url('https://64.media.tumblr.com/2df67fe7bdbba84c88cdbbdf84fd2743/tumblr_nqgvxz92HC1s85u2fo1_500.gif');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    ${StyledRegister},
    ${StyledLogin} {
        width: 70%;
        margin: auto;
    }

    @media (max-width: 450px) {
        flex-direction: column;
    }

    @media (min-width: 900px) {
        height: 100vh;
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

    > * {
        margin: 15px;
    }
`;

export const App: React.FC = () => {
    const [disabled, setDisabled] = useState(false);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    let navigate = useNavigate();

    const handleOnClick = () => {
        setDisabled(true);
        // Fake timeout to simmulate a request while api is not ready
        setTimeout(() => setDisabled(false), 2500);
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
                    <Button label="Log out" onClick={() => handleBack && handleBack()} />
                ) : (
                    <>
                        <Button label="Log in" onClick={() => handleLogin && handleLogin()} />
                        <Button label="Sign up" onClick={() => handleRegister && handleRegister()} />
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

    const Login = (
        <StyledContainer>
            <StyledHeader>
                <Button label="Go Back" onClick={() => handleBack && handleBack()} />
            </StyledHeader>
            <StyledContent>
                <StyledOverlay>
                    <StyledLogin
                        nameLabel="Username:"
                        nicknamePlaceholder="Please type in your Nickname here:"
                        passwordLabel="Password:"
                        passwordPlaceholder="Please type in your password here:"
                        onClick={handleOnClick}
                        disabled={disabled}
                    ></StyledLogin>
                </StyledOverlay>
            </StyledContent>
        </StyledContainer>
    );

    const buttonProps = {
        label: 'Go back',
        disabled: true,
        onClick: () => handleBack()
    };

    const formProps = {
        name: 'Test',
        disabled: false,
        validatePassword: true,
        doubleValidation: true,
        passwordLabel: 'PwLabel',
        nicknamePlaceholder: 'Nickname Placeholder',
        passwordPlaceholder: 'Pw Placeholder',
        onClick: () => handleOnClick()
    };

    const Register = <RegisterUI buttonProperties={buttonProps} formProperties={formProps}></RegisterUI>;

    return (
        <Routes>
            <Route path="/" element={App} />
            <Route path="register" element={Register} />
            <Route path="login" element={Login} />
        </Routes>
    );
};
