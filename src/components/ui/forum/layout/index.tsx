import React from 'react';

import { Header } from '../components';

import { StyledBody, StyledLayoutWrapper } from './styles';
import { ViewRouter } from './ViewRouter';

export const Layout = () => {
    return (
        <StyledLayoutWrapper>
            <Header />
            <StyledBody />
            <ViewRouter />
        </StyledLayoutWrapper>
    );
};
