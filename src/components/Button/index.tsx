import React from 'react';

import { getSizeInPx } from './helper';
import { StyledButton, StyledLabel } from './styles';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
    size = 'small',
    label = 'Button Label',
    buttonType = 'default',
    className,
    onClick,
    onMouseDown,
    ...props
}: ButtonProps) => {
    const buttonSize = getSizeInPx(size);

    return (
        <StyledButton
            size={size}
            buttonType={buttonType}
            buttonSize={buttonSize}
            aria-label="Button"
            data-testid="button"
            disabled={props.disabled}
            onClick={() => onClick && onClick()}
            onMouseDown={() => onMouseDown && onMouseDown()}
            {...props}
        >
            <StyledLabel disabled={props.disabled}>{label}</StyledLabel>
        </StyledButton>
    );
};
