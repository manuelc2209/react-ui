import React from 'react';
import styled from 'styled-components';

import { COLOR_PRIMARY_1, fontStyle, lightgrey1, setCursor } from '../../GlobalStyles';

interface InputProps {
    type?: string;
    label?: string;
    disabled?: boolean;
    className?: string;
    placeholder?: string;
    onChange?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

interface StyledContainerProps {
    disabled?: boolean;
}

interface StyledInputProps {
    disabled?: boolean;
}

interface StyledLabelProps {
    disabled?: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
    border-radius: 5px;
    border: 1px solid ${lightgrey1};
    padding: 0 10px;
`;

const StyledLabel = styled.span<StyledLabelProps>``;

const StyledContainer = styled.div<StyledContainerProps>`
    display: flex;
    flex-direction: column;

    ${StyledInput} {
        color: ${COLOR_PRIMARY_1};
    }

    ${StyledLabel} {
        color: white;
    }

    ${StyledInput},
    ${StyledLabel} {
        height: 28px;
    }

    ${StyledInput},
    ${StyledLabel} {
        cursor: ${setCursor};
        user-select: none;
        ${fontStyle};
    }
`;

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
