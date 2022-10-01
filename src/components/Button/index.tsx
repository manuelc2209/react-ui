import React from 'react';
import styled, { css } from 'styled-components';

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
type ButtonType = 'default' | 'border';

interface ButtonProps {
    size?: ButtonSize;
    buttonType?: ButtonType;
    label?: string;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
    onMouseUp?: () => void;
    onMouseDown?: () => void;
}

interface StyledButtonProps {
    size?: ButtonSize;
    disabled?: boolean;
    buttonSize?: number;
    buttonType?: ButtonType;
}

interface StyledLabelProps {
    disabled?: boolean;
}

const StyledLabel = styled.span<StyledLabelProps>`
    ${buttonLabelStyle}
`;

const baseTheme = css`
    border-radius: 4px;
    width: auto;
    padding: 10px;
    box-sizing: border-box;
    cursor: ${setCursor};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const disabledTheme = css`
    ${baseTheme};
    background-color: #c5c2c2;
`;

const defaultTheme = css`
    ${baseTheme};
    border: 1px solid ${lightgrey1};
    background-color: ${COLOR_PRIMARY_1};

    > * {
        color: white;
    }

    :hover {
        background-color: ${COLOR_PRIMARY_2};
    }

    :active {
        background-color: ${COLOR_PRIMARY_3};
    }
`;

const borderTheme = css`
    ${baseTheme};
    border: 1px solid ${COLOR_PRIMARY_1};
    background-color: transparent;

    > * {
        color: #5a5757;
    }

    :hover {
        > * {
            color: #494747;
        }
    }

    :active {
        > * {
            color: #161515;
        }
    }
`;

const setTheme = ({ buttonType, disabled }: { buttonType?: ButtonType; disabled?: boolean }) => {
    if (disabled) {
        return disabledTheme;
    }

    if (buttonType === 'border') {
        return borderTheme;
    }

    return defaultTheme;
};

const StyledButton = styled.button<StyledButtonProps>`
    height: ${(props) => props.buttonSize}px;
    ${setTheme};

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
    buttonType = 'default',
    disabled,
    className,
    onClick,
    onMouseUp,
    onMouseDown
}: ButtonProps) => {
    const buttonSize = getSizeInPx(size);

    return (
        <StyledButton
            size={size}
            buttonType={buttonType}
            buttonSize={buttonSize}
            disabled={Boolean(disabled)}
            aria-label="Button"
            data-testid="button"
            className={className}
            onClick={() => onClick && onClick()}
            onMouseDown={() => onMouseDown && onMouseDown()}
            onMouseUp={() => onMouseUp && onMouseUp()}
        >
            <StyledLabel disabled={disabled}>{label}</StyledLabel>
        </StyledButton>
    );
};
