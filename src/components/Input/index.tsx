import React from 'react';

import { StyledContainer, StyledInput, StyledLabel } from './styles';
import { InputProps } from './types';

export const Input: React.FC<InputProps> = ({
    type,
    label,
    disabled,
    className,
    placeholder,
    onChange
}: InputProps) => {
    return (
        <StyledContainer className={className}>
            {label && <StyledLabel>{label}</StyledLabel>}
            <StyledInput
                placeholder={placeholder}
                disabled={disabled}
                onChange={(event: React.FocusEvent<HTMLInputElement>) => onChange && onChange(event)}
                type={type}
            />
        </StyledContainer>
    );
};
