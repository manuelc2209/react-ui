import React, { useState } from 'react';
import styled from 'styled-components';
import { fontStyle, lightgrey1 } from '../../../GlobalStyles';

import { Button } from '../../Button';
import { mediumRegex, strongRegex } from './utils';

interface LoginProps {
    nicknamePlaceholder?: string;
    passwordPlaceholder?: string;
    disabled?: boolean;
    nameLabel?: string;
    passwordLabel?: string;
    validatePassword?: boolean;
    onClick?: () => void;
}

interface StyledContainerProps {
    disabled?: boolean;
}

interface StyledInputProps {
    placeholder?: string;
    disabled?: boolean;
    hasMargin?: boolean;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

interface StyledDisplayProps {
    backgroundColor?: string;
    displayWidth?: string;
}

const setCursor = ({ disabled }: { disabled?: boolean }) => {
    return disabled ? 'not-allowed' : 'default';
};

const setMargin = ({ hasMargin }: { hasMargin?: boolean }) => hasMargin && 'margin-right: 5px';

const StyledInput = styled.input<StyledInputProps>`
    border-radius: 5px;
    border: 1px solid ${lightgrey1};
    ${setMargin}
`;

const StyledLabel = styled.span``;

const StyledDisplay = styled.span<StyledDisplayProps>`
    background-color: ${(props: StyledDisplayProps) => props.backgroundColor};
    width: ${(props: StyledDisplayProps) => props.displayWidth};
    padding-top: 1px;
    height: 2px;
`;

const StyledButton = styled(Button)``;

const StyledContainer = styled.div<StyledContainerProps>`
    display: flex;
    flex-direction: column;

    :not(:last-child) {
        margin-bottom: 20px;
    }

    ${StyledInput},
    ${StyledLabel} {
        height: 22px;
    }

    ${StyledInput},
    ${StyledButton},
  ${StyledDisplay},
  ${StyledLabel} {
        cursor: ${setCursor};
        user-select: none;
        ${fontStyle};
    }
`;

const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: row;

    ${StyledInput} {
        flex: 1;
    }
`;

export const Login: React.FC<LoginProps> = ({
    nameLabel,
    passwordLabel,
    nicknamePlaceholder,
    passwordPlaceholder,
    validatePassword,
    disabled,
    onClick
}) => {
    const [backgroundColor, setBackgroundColor] = useState('');
    const [displayWidth, setDisplayWidth] = useState('');
    const [displayPassword, setDisplayPassword] = useState(false);

    const handleValidation = (event: React.FocusEvent<HTMLInputElement>) => {
        if (strongRegex.test(event.target.value)) {
            setBackgroundColor('#0F9D58');
            setDisplayWidth('50%');
        } else if (mediumRegex.test(event.target.value)) {
            setBackgroundColor('#F4B400');
            setDisplayWidth('30%');
        } else {
            setBackgroundColor('#DB4437');
            setDisplayWidth('15%');
        }
    };

    return (
        <StyledContainer disabled={disabled}>
            {Boolean(nameLabel) && (
                <StyledContainer>
                    <StyledLabel>{nameLabel}</StyledLabel>
                    <StyledInput placeholder={nicknamePlaceholder} disabled={disabled}></StyledInput>
                </StyledContainer>
            )}
            {Boolean(passwordLabel) && (
                <StyledContainer>
                    <StyledLabel>{passwordLabel}</StyledLabel>
                    <StyledInputContainer>
                        <StyledInput
                            placeholder={passwordPlaceholder}
                            disabled={disabled}
                            onChange={(event: React.FocusEvent<HTMLInputElement>) =>
                                validatePassword && handleValidation && handleValidation(event)
                            }
                            type={displayPassword ? 'text' : 'password'}
                            hasMargin={true}
                        ></StyledInput>
                        <StyledButton
                            onMouseDown={() => setDisplayPassword && setDisplayPassword(true)}
                            onMouseUp={() => setDisplayPassword && setDisplayPassword(false)}
                            disabled={disabled}
                        >
                            Display Password
                        </StyledButton>
                    </StyledInputContainer>
                    <StyledDisplay backgroundColor={backgroundColor} displayWidth={displayWidth} />
                </StyledContainer>
            )}
            <StyledButton onClick={() => onClick && onClick()} disabled={disabled}>
                Submit
            </StyledButton>
        </StyledContainer>
    );
};
