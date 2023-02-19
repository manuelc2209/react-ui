import styled from 'styled-components';

import { COLOR_PRIMARY_1, fontStyle, lightgrey1, setCursor } from '../../GlobalStyles';

import { StyledContainerProps, StyledInputProps, StyledLabelProps } from './types';

export const StyledInput = styled.input<StyledInputProps>`
    border-radius: 5px;
    border: 1px solid ${lightgrey1};
    padding: 0 10px;
`;

export const StyledLabel = styled.span<StyledLabelProps>``;

export const StyledContainer = styled.div<StyledContainerProps>`
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
        height: 32px;
    }

    ${StyledInput},
    ${StyledLabel} {
        cursor: ${setCursor};
        user-select: none;
        ${fontStyle};
    }
`;
