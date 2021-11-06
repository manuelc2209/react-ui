import React from 'react';
import styled from 'styled-components';
import { fontStyle, setCursor } from '../../../GlobalStyles';
import { Button } from '../../Button';
import { Input } from '../../Input';

interface LoginProps {
    nicknamePlaceholder?: string;
    passwordPlaceholder?: string;
    disabled?: boolean;
    nameLabel?: string;
    passwordLabel?: string;
    onClick?: () => void;
}

interface StyledContainerProps {
    disabled?: boolean;
}

const StyledWrapper = styled.div``;

const StyledLabel = styled.span``;

const StyledButton = styled(Button)``;

const StyledContainer = styled.div<StyledContainerProps>`
    display: flex;
    flex-direction: column;

    :not(:last-child) {
        margin-bottom: 20px;
    }

    ${StyledLabel} {
        height: 22px;
    }

    ${StyledLabel} {
        cursor: ${setCursor};
        user-select: none;
        ${fontStyle};
    }
`;

export const Login: React.FC<LoginProps> = ({
    nameLabel,
    nicknamePlaceholder,
    disabled,
    passwordLabel,
    passwordPlaceholder,
    onClick
}) => {
    return (
        <StyledWrapper>
            <StyledContainer>
                <StyledLabel>{nameLabel}</StyledLabel>
                <Input placeholder={nicknamePlaceholder} disabled={disabled}></Input>
            </StyledContainer>
            <Input
                label={passwordLabel}
                placeholder={passwordPlaceholder}
                disabled={disabled}
                type={'password'}
            ></Input>
            <StyledButton
                label="Submit"
                onClick={() => !disabled && onClick && onClick()}
                disabled={disabled}
            />
        </StyledWrapper>
    );
};
