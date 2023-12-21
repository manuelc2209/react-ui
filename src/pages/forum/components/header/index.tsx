import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Banner } from '../banner';

import { StyledButton, StyledCTAEnd, StyledHeaderWrapper } from './styles';

export const Header = () => {
    const navigate = useNavigate();

    return (
        <StyledHeaderWrapper>
            <StyledCTAEnd>
                <StyledButton size="large" label="Login" onClick={() => navigate('/forum/login')} />
                <StyledButton size="large" label="Sign Up" onClick={() => navigate('/forum/register')} />
            </StyledCTAEnd>
            <StyledButton size="large" label="Back" onClick={() => navigate(-1)} />
        </StyledHeaderWrapper>
    );
};
