import React from 'react';

import { StyledContainer, StyledInput, StyledLabel } from './styles';
import { InputProps } from './types';

export const Input = ({ type, label, placeholder, onChange, ...props }: InputProps) => {
    return (
        <StyledContainer className={props.className}>
            {label && <StyledLabel>{label}</StyledLabel>}
            <StyledInput
                placeholder={placeholder}
                onChange={(event: React.FocusEvent<HTMLInputElement>) => onChange && onChange(event)}
                type={type}
                {...props}
            />
        </StyledContainer>
    );
};
