import React from 'react';
import styled from 'styled-components';

import { Button, Header, Login } from '../..';
import { COLOR_PRIMARY_2 } from '../../../GlobalStyles';

interface LoginUIProps {
    buttonProperties: ButtonProps;
    formProperties: FormProps;
}

interface ButtonProps {
    label?: string;
    onClick?: () => void;
}

interface FormProps {
    nameLabel?: string;
    nicknamePlaceholder?: string;
    passwordLabel?: string;
    passwordPlaceholder?: string;
    disabled?: boolean;
    onClick: () => void;
}

const StyledContainer = styled.div`
    height: inherit;
    display: flex;
    flex-direction: column;
`;

const StyledLogin = styled(Login)``;

const StyledContent = styled.div`
    display: flex;
    flex-direction: row;
    background-image: url('https://64.media.tumblr.com/2df67fe7bdbba84c88cdbbdf84fd2743/tumblr_nqgvxz92HC1s85u2fo1_500.gif');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;

    /* REMOVE THIS AFTER UI IS MADE IN APP.TSX */
    ${StyledLogin} {
        box-sizing: border-box;
        background: #3d3c3c9b;
        border-radius: 7px;
        padding: 50px;
        width: 40%;
        margin: auto;
    }

    @media (max-width: 750px) {
        flex-direction: column;
        flex: 1;

        ${StyledLogin} {
            padding: 25px;
            width: 100%;
            margin: 100px 0px;
            position: relative;
            box-sizing: border-box;
        }
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

const StyledLeftSideContent = styled.div`
    background: #6d6d6dac;
`;

const StyledHeader = styled(Header)`
    border-bottom: 1px solid ${COLOR_PRIMARY_2};

    > * {
        margin: 15px;
    }
`;

export const LoginUI: React.FC<LoginUIProps> = ({ formProperties, buttonProperties }) => {
    return (
        <StyledContainer>
            <StyledHeader>
                <Button
                    {...buttonProperties}
                    label="Go Back"
                    onClick={() => buttonProperties.onClick && buttonProperties.onClick()}
                />
            </StyledHeader>
            <StyledContent>
                <StyledOverlay>
                    <StyledLogin
                        nameLabel={formProperties.nameLabel || 'Username:'}
                        nicknamePlaceholder={
                            formProperties.nicknamePlaceholder || 'Please type in your Nickname here:'
                        }
                        passwordLabel={formProperties.passwordLabel || 'Password:'}
                        passwordPlaceholder={
                            formProperties.passwordPlaceholder || 'Please type in your password here:'
                        }
                        onClick={formProperties.onClick}
                        disabled={formProperties.disabled}
                    />
                </StyledOverlay>
            </StyledContent>
        </StyledContainer>
    );
};
