import styled from 'styled-components';

import { COLOR_PRIMARY } from '../../GlobalStyles';

import { StyledHeaderProps } from './types';

const setColor = ({ backgroundColor }: { backgroundColor?: string }) => {
    return backgroundColor ? backgroundColor : COLOR_PRIMARY;
};

export const StyledHeader = styled.div<StyledHeaderProps>`
    position: relative;
    top: 0;
    width: 100%;
    display: flex;
    background: ${setColor};
    z-index: 999;
    flex-direction: row;
    justify-content: flex-end;
    height: 60px;
    align-items: center;

    > * {
        padding: 0 13px;
    }
`;
