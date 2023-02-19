import styled, { css } from 'styled-components';

import {
    setCursor,
    lightgrey1,
    COLOR_PRIMARY_1,
    COLOR_PRIMARY_2,
    COLOR_PRIMARY_3,
    fontStyle,
    buttonLabelStyle
} from '../../GlobalStyles';

import { ButtonType, StyledButtonProps, StyledLabelProps } from './types';

export const baseTheme = css`
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

export const disabledTheme = css`
    ${baseTheme};
    background-color: #c5c2c2;
`;

export const defaultTheme = css`
    ${baseTheme};
    border: 2px solid ${lightgrey1};
    background-color: ${COLOR_PRIMARY_1};

    > * {
        color: white;
        font-weight: 600;
    }

    :hover {
        background-color: ${COLOR_PRIMARY_2};
    }

    :active {
        background-color: ${COLOR_PRIMARY_3};
    }
`;

export const borderTheme = css`
    ${baseTheme};
    border: 2px solid ${COLOR_PRIMARY_1};
    background-color: transparent;

    > * {
        color: #0a0a0a;
        font-weight: 600;
    }

    :hover {
        > * {
            color: #292929;
        }
    }

    :active {
        > * {
            color: #161515;
        }
    }
`;

export const setTheme = ({ buttonType, disabled }: { buttonType?: ButtonType; disabled?: boolean }) => {
    if (disabled) {
        return disabledTheme;
    }

    if (buttonType === 'border') {
        return borderTheme;
    }

    return defaultTheme;
};

export const StyledButton = styled.button<StyledButtonProps>`
    height: ${(props) => props.buttonSize}px;
    ${setTheme};

    ${fontStyle};
`;

export const StyledLabel = styled.span<StyledLabelProps>`
    ${buttonLabelStyle}
`;
