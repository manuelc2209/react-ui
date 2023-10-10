import React from 'react';

import { getSizeInPx } from './helper';
import { StyledButton, StyledLabel } from './styles';
import { ButtonProps } from './types';

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
