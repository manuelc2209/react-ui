import React from 'react';

import { Button } from '../../../../Button';

import { StyledHeaderWrapper } from './styles';

export const Header = () => {
    return (
        <StyledHeaderWrapper>
            <Button label="Sign Up" />
            <Button label="Login" />
        </StyledHeaderWrapper>
    );
};
