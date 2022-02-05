import React from 'react';
import styled from 'styled-components';

import {
    buttonLabelStyle,
    COLOR_PRIMARY_1,
    COLOR_PRIMARY_2,
    COLOR_PRIMARY_3,
    fontStyle,
    lightgrey1,
    setCursor
} from '../../GlobalStyles';

type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
    size?: ButtonSize;
    label?: string;
    disabled?: boolean;
    className?: string;
    mouseEvents?: boolean;
    onClick?: () => void;
    onMouseUp?: () => void;
    onMouseDown?: () => void;
}

interface StyledButtonProps {
    size?: ButtonSize;
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
    padding: 10px;
    box-sizing: border-box;
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
        background-color: ${COLOR_PRIMARY_2};
    }

    :active {
        background-color: ${COLOR_PRIMARY_3};
    }

    :disabled {
        background-color: #9e9e9e;
    }

    ${fontStyle};
`;

function getSizeInPx(size: string): number {
    switch (size) {
        case 'large':
            return 36;
        case 'medium':
            return 28;
        default:
            return 26;
    }
}

export const Button: React.FC<ButtonProps> = ({
    size = 'small',
    label = 'Button Label',
    disabled,
    className,
    mouseEvents,
    onClick,
    onMouseUp,
    onMouseDown
}: ButtonProps) => {
    const buttonSize = getSizeInPx(size);

    return (
        <StyledButton
            size={size}
            buttonSize={buttonSize}
            disabled={Boolean(disabled)}
            className={className}
            onClick={() => onClick && onClick()}
            onMouseDown={() => mouseEvents && onMouseDown && onMouseDown()}
            onMouseUp={() => mouseEvents && onMouseUp && onMouseUp()}
        >
            <StyledLabel disabled={disabled}>{label}</StyledLabel>
        </StyledButton>
    );
};
