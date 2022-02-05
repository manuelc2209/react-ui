import React from 'react';
import styled from 'styled-components';
import Color from 'color';
import validateColor from 'validate-color';

import { COLOR_PRIMARY } from '../../GlobalStyles';

interface HeaderProps {
    backgroundColor?: string;
    className?: string;
    children?: any;
}

interface StyledHeaderProps {
    backgroundColor?: string;
}

const setColor = ({ backgroundColor }: { backgroundColor?: string }) => {
    return backgroundColor ? backgroundColor : COLOR_PRIMARY;
};

const StyledHeader = styled.div<StyledHeaderProps>`
    position: fixed;
    width: 100%;
    display: flex;
    flex: 1;
    background: ${setColor};
    z-index: 999;
    flex-direction: row;
    justify-content: flex-end;
    height: 60px;
    align-items: center;

    > * {
        padding: 0 16px;
    }
`;

export const Header: React.FC<HeaderProps> = ({ backgroundColor, className, children }: HeaderProps) => {
    const parsedColor = validateColor(backgroundColor as string);
    const bgHex = (parsedColor && Color(backgroundColor).hex()) || '';

    return (
        <StyledHeader backgroundColor={bgHex} className={className}>
            {children}
        </StyledHeader>
    );
};
