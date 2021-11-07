import { css } from 'styled-components';

export const fontStyle = css`
    font-size: 14px;
    font-weight: 500;
    font-family: 'Helvetica Neue', sans-serif;
    letter-spacing: -1px;
    line-height: 1;
`;

export const buttonLabelStyle = css`
    color: white;
    font-weight: 500;
    font-family: 'Helvetica Neue', sans-serif;
`;

export const COLOR_PRIMARY = '#151515';
export const COLOR_PRIMARY_1 = 'black';
export const COLOR_PRIMARY_2 = '#3c3c3c';
export const COLOR_PRIMARY_3 = '#202020';

export const lightgrey1 = '#c5c5c5';

export const setCursor = ({ disabled }: { disabled?: boolean }) => {
    return disabled ? 'not-allowed' : 'default';
};
