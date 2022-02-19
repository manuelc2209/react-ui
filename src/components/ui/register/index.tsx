import React from 'react';
import styled from 'styled-components';

import { Button, Header, Register } from '../..';
import { COLOR_PRIMARY_2 } from '../../../GlobalStyles';

interface RegisterUIProps {
    buttonProperties: ButtonProps;
    formProperties: FormProps;
}

interface ButtonProps {
    label?: string;
    onClick?: () => void;
}

interface FormProps {
    name?: string;
    disabled?: boolean;
    validatePassword?: boolean;
    doubleValidation?: boolean;
    passwordLabel?: string;
    nicknamePlaceholder?: string;
    passwordPlaceholder?: string;
    repeatPasswordPlaceholder?: string;
    onClick?: () => void;
}

const StyledContainer = styled.div`
    height: inherit;
    display: flex;
    flex-direction: column;
`;

const StyledRegister = styled(Register)``;

const StyledContent = styled.div`
    display: flex;
    flex-direction: row;
    background-image: url('https://64.media.tumblr.com/2df67fe7bdbba84c88cdbbdf84fd2743/tumblr_nqgvxz92HC1s85u2fo1_500.gif');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;

    ${StyledRegister} {
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

        ${StyledRegister} {
            padding: 25px;
            width: 100%;
            margin: 100px 0px;
            position: relative;
            box-sizing: border-box;
        }
    }

    @media (min-width: 900px) {
        top: 60px;
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

const StyledHeader = styled(Header)`
    border-bottom: 1px solid ${COLOR_PRIMARY_2};
    flex-direction: row;
    justify-content: flex-end;

    > * {
        margin: 10px;
    }
`;

export const RegisterUI: React.FC<RegisterUIProps> = ({ formProperties, buttonProperties }) => {
    return (
        <StyledContainer>
            <StyledHeader>
                <Button
                    {...buttonProperties}
                    label={buttonProperties.label}
                    onClick={() => buttonProperties.onClick && buttonProperties.onClick()}
                />
            </StyledHeader>
            <StyledContent>
                <StyledOverlay>
                    <StyledRegister
                        nameLabel={formProperties.name || 'Username:'}
                        nicknamePlaceholder={
                            formProperties.nicknamePlaceholder || 'Please insert a valid Nickname here:'
                        }
                        passwordLabel={formProperties.passwordLabel || 'Password:'}
                        passwordPlaceholder={
                            formProperties.passwordPlaceholder || 'Please insert a valid password here:'
                        }
                        repeatPasswordLabel={
                            formProperties.repeatPasswordPlaceholder || 'Please repeat your password here'
                        }
                        validatePassword={formProperties.validatePassword}
                        doubleValidation={formProperties.doubleValidation}
                        onClick={formProperties.onClick}
                        disabled={formProperties.disabled}
                    />
                </StyledOverlay>
            </StyledContent>
        </StyledContainer>
    );
};
