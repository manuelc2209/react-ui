import React, { useState } from 'react';
import styled from 'styled-components';

import { Button } from './components/Button';
import { Login } from './components/ui/login';
import { Register } from './components/ui/register';

const StyledContainer = styled.div`
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
            {login ? (
                <Button label="Log out" onClick={() => handleLogin && handleLogin()} />
            ) : (
                <>
                    <Button label="Log in" onClick={() => handleLogin && handleLogin()} />
                    <Button label="Sign up" onClick={() => handleRegister && handleRegister()} />
                </>
            )}
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
            {login && <Login>Login</Login>}
        </StyledContainer>
    );
};
