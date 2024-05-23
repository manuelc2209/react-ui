import React from 'react';

import { StyledContainer, StyledInput, StyledLabel } from './styles';
import { InputProps } from './types';

export const Input: React.FC<InputProps> = ({ type, label, placeholder, onChange, ...props }) => {
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
