import React from 'react';
import styled from 'styled-components';
import { fontStyle, lightgrey1, setCursor } from '../../GlobalStyles';

type buttonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
    size?: buttonSize;
    label?: string;
    disabled?: boolean;
    className?: string;
    mouseEvents?: boolean; // flag to specify if onMouseUp & onMouseDown should trigger callbacks
    onClick?: () => void;
    onMouseUp?: () => void;
    onMouseDown?: () => void;
}

interface StyledButtonProps {
    size?: buttonSize;
    disabled?: boolean;
    buttonSize?: number;
}

const StyledButton = styled.button<StyledButtonProps>`
    width: auto;
    height: ${(props) => props.buttonSize}px;
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

function getSizeInPx(size: string): number {
    switch (size) {
        case 'large':
            return 26;
        case 'medium':
            return 22;
        default:
            return 18;
    }
}

export const Button: React.FC<ButtonProps> = ({
    size = 'small',
    label,
    disabled,
    className,
    mouseEvents,
    onClick,
    onMouseUp,
    onMouseDown
}) => {
    const buttonSize = getSizeInPx(size);

    return (
        <StyledButton
            size={size}
            buttonSize={buttonSize}
            disabled={disabled}
            className={className}
            onClick={() => onClick && onClick()}
            onMouseDown={() => mouseEvents && onMouseDown && onMouseDown()}
            onMouseUp={() => mouseEvents && onMouseUp && onMouseUp()}
        >
            {label}
        </StyledButton>
    );
};
