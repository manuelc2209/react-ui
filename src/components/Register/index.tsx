import React, { useState } from 'react';
import styled from 'styled-components';

import { fontStyle, setCursor } from '../../GlobalStyles';
import { Button } from '../Button';
import { Input } from '../Input';

import { strongRegex, mediumRegex } from './utils';

interface RegisterProps {
    nicknamePlaceholder?: string;
    passwordPlaceholder?: string;
    repeatPasswordLabel?: string;
    disabled?: boolean;
    nameLabel?: string;
    passwordLabel?: string;
    validatePassword?: boolean;
    doubleValidation?: boolean;
    className?: string;
    onClick?: () => void;
}

interface StyledContainerProps {
    disabled?: boolean;
    className?: string;
}

interface StyledDisplayProps {
    backgroundColor?: string;
    displayWidth?: string;
}

const StyledLabel = styled.span``;

const StyledPasswordContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const StyledPassword = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-right: 5px;
`;

const StyledDisplay = styled.span<StyledDisplayProps>`
    border-radius: 7px;
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
    margin-bottom: 4px;
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

export const Register: React.FC<RegisterProps> = ({
    nameLabel,
    passwordLabel,
    repeatPasswordLabel,
    nicknamePlaceholder,
    passwordPlaceholder,
    validatePassword,
    doubleValidation,
    disabled,
    className,
    onClick
}: RegisterProps) => {
    const [validationColor, setValidationColor] = useState('');
    const [displayPassword, setDisplayPassword] = useState(false);
    const [validationValid, setValidationValid] = useState(false);
    const [displayWidth, setDisplayWidth] = useState('');
    const [value, setValue] = useState('');

    const handleValidation = (event: React.FocusEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        if (strongRegex.test(event.target.value)) {
            setValidationColor('#0F9D58');
            setDisplayWidth('100%');
        } else if (mediumRegex.test(event.target.value)) {
            setValidationColor('#F4B400');
            setDisplayWidth('50%');
        } else {
            setValidationColor('#DB4437');
            setDisplayWidth('25%');
        }
    };

    const crossValidation = (event: React.FocusEvent<HTMLInputElement>) => {
        if (!value) {
            return;
        }
        setValidationValid(event.target.value === value);
    };

    const titleDisplay =
        'We Recommend a minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character';

    return (
        <StyledContainer disabled={disabled} className={className}>
            {Boolean(nameLabel) && (
                <StyledContainer>
                    <Input label={nameLabel} placeholder={nicknamePlaceholder} disabled={disabled} />
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
                            type={displayPassword ? 'text' : 'password'}
                        />
                        <StyledDisplay
                            title={titleDisplay}
                            backgroundColor={validationColor}
                            displayWidth={displayWidth}
                        />
                    </StyledPassword>
                    <StyledButtonVisible
                        label="Display Password"
                        size="medium"
                        mouseEvents
                        onMouseDown={() => setDisplayPassword && setDisplayPassword(true)}
                        onMouseUp={() => setDisplayPassword && setDisplayPassword(false)}
                        disabled={!value || disabled}
                    />
                </StyledPasswordContainer>
            )}
            {Boolean(passwordLabel) && Boolean(doubleValidation) && (
                <Input
                    label={`Repeat ${passwordLabel}`}
                    placeholder={repeatPasswordLabel}
                    disabled={disabled}
                    onChange={(event: React.FocusEvent<HTMLInputElement>) =>
                        validatePassword && crossValidation && crossValidation(event)
                    }
                    type="password"
                />
            )}
            <StyledButton
                label="Submit"
                onClick={() => !disabled && onClick && onClick()}
                disabled={!validationValid}
            />
        </StyledContainer>
    );
};
