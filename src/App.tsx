import React, { useState } from 'react';
import styled from 'styled-components';
import './index.css';

import { Button } from './components/Button';
import { Header } from './components/Header';
import { Login } from './components/ui/login';
import { Register } from './components/ui/register';

const StyledContainer = styled.div``;

const StyledContent = styled.div`
    > * {
        margin: 15px;
    }
`;

const StyledHeader = styled(Header)`
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

    const handleOnClick = () => {
        setDisabled(true);
        // Fake timeout to simmulate a request handler while api is not ready
        setTimeout(() => setDisabled(false), 2500);
    };

    const handleLogin = () => {
        setRegister(false);
        setLogin(!login);
    };

    const handleRegister = () => {
        setRegister(!register);
        setLogin(false);
    };

    return (
        <StyledContainer>
            <StyledHeader>
                {login ? (
                    <Button label="Log out" onClick={() => handleLogin && handleLogin()} />
                ) : (
                    <>
                        <Button label="Log in" onClick={() => handleLogin && handleLogin()} />
                        <Button label="Sign up" onClick={() => handleRegister && handleRegister()} />
                    </>
                )}
            </StyledHeader>
            <StyledContent>
                {register && (
                    <Register
                        nameLabel="Username:"
                        nicknamePlaceholder="Please insert a valid Nickname here:"
                        passwordLabel="Password:"
                        passwordPlaceholder="Please insert a valid password here:"
                        validatePassword={true}
                        doubleValidation={true}
                        onClick={handleOnClick}
                        disabled={disabled}
                    ></Register>
                )}
                {login && (
                    <Login
                        nameLabel="Username:"
                        nicknamePlaceholder="Please type in your Nickname here:"
                        passwordLabel="Password:"
                        passwordPlaceholder="Please type in your password here:"
                        disabled={disabled}
                    ></Login>
                )}
            </StyledContent>
        </StyledContainer>
    );
};
