import React from 'react';
import styled from 'styled-components';
import { fontStyle, lightgrey1, setCursor } from '../../GlobalStyles';

interface StyledButtonProps {
    label?: string;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
    onMouseUp?: () => void;
    onMouseDown?: () => void;
}

const StyledButton = styled.button<StyledButtonProps>`
    width: auto;
    height: 25px;
    border: 1px solid ${lightgrey1};
    background-color: lightblue;
    border-radius: 7px;
    cursor: ${setCursor};

    :hover {
        background-color: #a8c1f6;
    }

    :active {
        background-color: #7ca1e7;
    }

    :disabled {
        background-color: grey;
    }

    ${fontStyle};
`;

export const Button: React.FC<StyledButtonProps> = ({
    label,
    disabled,
    className,
    onClick,
    onMouseUp,
    onMouseDown
}) => {
    return (
        <StyledButton
            disabled={disabled}
            className={className}
            onClick={() => onClick && onClick()}
            onMouseDown={() => onMouseDown && onMouseDown()}
            onMouseUp={() => onMouseUp && onMouseUp()}
        >
            {label}
        </StyledButton>
    );
};
