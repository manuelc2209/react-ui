import React from 'react';

import { Header } from '../../components';

import { StyledLayoutWrapper, StyledBody } from './styles';

export const Layout = () => {
    return (
        <StyledLayoutWrapper>
            <Header />
            <StyledBody />
        </StyledLayoutWrapper>
    );
};
