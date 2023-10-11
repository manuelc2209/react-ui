import React from 'react';
import Color from 'color';
import validateColor from 'validate-color';

import { HeaderProps } from './types';
import { StyledHeader } from './styles';

export const Header: React.FC<HeaderProps> = ({ backgroundColor, className, children }: HeaderProps) => {
    const parsedColor = validateColor(backgroundColor as string);
    const bgHex = (parsedColor && Color(backgroundColor).hex()) || '';

    return (
        <StyledHeader backgroundColor={bgHex} className={className}>
            {children}
        </StyledHeader>
    );
};
