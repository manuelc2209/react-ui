import { css } from 'styled-components';

export const fontStyle = css`
    font-size: 14px;
    font-weight: 500;
    color: #111;
    font-family: 'Helvetica Neue', sans-serif;
    letter-spacing: -1px;
    line-height: 1;
`;

export const lightgrey1 = '#c5c5c5';

export const setCursor = ({ disabled }: { disabled?: boolean }) => {
    return disabled ? 'not-allowed' : 'default';
};
