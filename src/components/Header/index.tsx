import React from 'react';

import { HeaderProps } from './types';
import { StyledHeader } from './styles';

export const Header = ({ backgroundColor, className, children }: HeaderProps) => {
    return (
        <StyledHeader backgroundColor={backgroundColor} className={className}>
            {children}
        </StyledHeader>
    );
};
