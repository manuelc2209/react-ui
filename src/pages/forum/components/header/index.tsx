import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Banner } from '../banner';

import { StyledButton, StyledCTAEnd, StyledHeaderWrapper } from './styles';

export const Header = () => {
    const navigate = useNavigate();

    return (
        <>
            <StyledHeaderWrapper>
                <StyledButton size="large" buttonType="border" label="Back" onClick={() => navigate(-1)} />
                <StyledCTAEnd>
                    <StyledButton
                        size="large"
                        buttonType="border"
                        label="Login"
                        onClick={() => navigate('/forum/login')}
                    />
                    <StyledButton
                        size="large"
                        buttonType="border"
                        label="Sign Up"
                        onClick={() => navigate('/forum/register')}
                    />
                </StyledCTAEnd>
            </StyledHeaderWrapper>
        </>
    );
};
