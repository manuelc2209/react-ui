import React from 'react';
import styled from 'styled-components';
import { buttonLabelStyle, COLOR_PRIMARY_1, fontStyle, lightgrey1, setCursor } from '../../GlobalStyles';

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

interface StyledLabelProps {
    disabled?: boolean;
}

const StyledLabel = styled.span<StyledLabelProps>`
    ${buttonLabelStyle}
`;

const StyledButton = styled.button<StyledButtonProps>`
    width: auto;
    padding: 7px 7px;
    height: ${(props) => props.buttonSize}px;
    border: 1px solid ${lightgrey1};
    background-color: ${COLOR_PRIMARY_1};
    border-radius: 4px;
    cursor: ${setCursor};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    :hover {
        background-color: #6b86c2;
    }

    :active {
        background-color: #4a6291;
    }

    :disabled {
        background-color: #9e9e9e;
    }

    ${fontStyle};
`;

function getSizeInPx(size: string): number {
    switch (size) {
        case 'large':
            return 30;
        case 'medium':
            return 26;
        default:
            return 22;
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
            <StyledLabel disabled={disabled}>{label}</StyledLabel>
        </StyledButton>
    );
};
