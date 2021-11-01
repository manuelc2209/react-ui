import React, { useState } from 'react';
import styled from 'styled-components';
import { fontStyle, setCursor } from '../../../GlobalStyles';

import { Button } from '../../Button';
import { Input } from '../../Input';
import { mediumRegex, strongRegex } from './utils';

interface LoginProps {
    nicknamePlaceholder?: string;
    passwordPlaceholder?: string;
    disabled?: boolean;
    nameLabel?: string;
    passwordLabel?: string;
    validatePassword?: boolean;
    doubleValidation?: boolean;
    onClick?: () => void;
}

interface StyledContainerProps {
    disabled?: boolean;
}

interface StyledDisplayProps {
    backgroundColor?: string;
    displayWidth?: string;
}

const StyledLabel = styled.span``;

const StyledPasswordContainer = styled.div`
    display: flex;
    height: 47px;
    margin-bottom: 20px;
`;

const StyledPassword = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 28px;
    margin-right: 5px;
`;

const StyledDisplay = styled.span<StyledDisplayProps>`
    background-color: ${(props: StyledDisplayProps) => props.backgroundColor};
    width: ${(props: StyledDisplayProps) => props.displayWidth};
    padding-top: 2px;
    height: 2px;
`;

const StyledButton = styled(Button)``;

const StyledButtonVisible = styled(Button)`
    display: flex;
    flex-direction: column;
    align-self: self-end;
    justify-content: center;
`;

const StyledContainer = styled.div<StyledContainerProps>`
    display: flex;
    flex-direction: column;

    :not(:last-child) {
        margin-bottom: 20px;
    }

    ${StyledLabel} {
        height: 22px;
    }

    ${StyledDisplay},
    ${StyledLabel} {
        cursor: ${setCursor};
        user-select: none;
        ${fontStyle};
    }
`;

export const Login: React.FC<LoginProps> = ({
    nameLabel,
    passwordLabel,
    nicknamePlaceholder,
    passwordPlaceholder,
    validatePassword,
    doubleValidation,
    disabled,
    onClick
}) => {
    const [backgroundColor, setBackgroundColor] = useState('');
    const [displayPassword, setDisplayPassword] = useState(false);
    const [validationValid, setValidationValid] = useState(false);
    const [displayWidth, setDisplayWidth] = useState('');
    const [value, setValue] = useState('');

    const handleValidation = (event: React.FocusEvent<HTMLInputElement>) => {
        if (strongRegex.test(event.target.value)) {
            setBackgroundColor('#0F9D58');
            setDisplayWidth('100%');
        } else if (mediumRegex.test(event.target.value)) {
            setBackgroundColor('#F4B400');
            setDisplayWidth('50%');
        } else {
            setBackgroundColor('#DB4437');
            setDisplayWidth('25%');
        }
    };

    const crossValidation = (event: React.FocusEvent<HTMLInputElement>) => {
        setValidationValid(event.target.value === value);
    };

    return (
        <StyledContainer disabled={disabled}>
            {Boolean(nameLabel) && (
                <StyledContainer>
                    <StyledLabel>{nameLabel}</StyledLabel>
                    <Input placeholder={nicknamePlaceholder} disabled={disabled}></Input>
                </StyledContainer>
            )}
            {Boolean(passwordLabel) && (
                <StyledPasswordContainer>
                    <StyledPassword>
                        <Input
                            label={passwordLabel}
                            placeholder={passwordPlaceholder}
                            disabled={disabled}
                            onChange={(event: React.FocusEvent<HTMLInputElement>) =>
                                validatePassword && handleValidation && handleValidation(event)
                            }
                            onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
                                setValue && setValue(event.target.value)
                            }
                            type={displayPassword ? 'text' : 'password'}
                        />
                        <StyledDisplay backgroundColor={backgroundColor} displayWidth={displayWidth} />
                    </StyledPassword>
                    <StyledButtonVisible
                        label="Display Password"
                        onMouseDown={() => setDisplayPassword && setDisplayPassword(true)}
                        onMouseUp={() => setDisplayPassword && setDisplayPassword(false)}
                        disabled={disabled}
                    />
                </StyledPasswordContainer>
            )}
            {Boolean(passwordLabel) && Boolean(doubleValidation) && (
                <Input
                    placeholder={`Please repeat your ${passwordLabel}`}
                    disabled={disabled}
                    onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
                        validatePassword && crossValidation && crossValidation(event)
                    }
                    type={'password'}
                ></Input>
            )}
            <StyledButton
                label="Submit"
                onClick={() => !disabled && onClick && onClick()}
                disabled={!validationValid}
            />
        </StyledContainer>
    );
};
