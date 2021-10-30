import React, { useState } from 'react';
import styled from 'styled-components';

import { Button } from './components/Button';
import { Login } from './components/ui/login';

const StyledContainer = styled.div`
  > * {
    margin: 15px;
  }
`;

export const App: React.FC = () => {
    const [disabled, setDisabled] = useState(false);
    const [login, setLogin] = useState(false);

    const handleOnClick = () => {
        setDisabled(true);
        //Fake login hammertime while api is not rdy
        setTimeout(() => setDisabled(false), 2500);
    };

    return (
        <StyledContainer>
            <Button onClick={() => setLogin && setLogin(!login)}>Login</Button>
            {login && (
                <Login
                    nameLabel="Username:"
                    nicknamePlaceholder="Please insert a valid Nickname here:"
                    passwordLabel="Password:"
                    passwordPlaceholder="Please insert a valid password here:"
                    validatePassword={true}
                    onClick={handleOnClick}
                    disabled={disabled}
                ></Login>
            )}
        </StyledContainer>
    );
};
