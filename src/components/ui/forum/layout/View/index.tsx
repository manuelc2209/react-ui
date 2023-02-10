import React from 'react';

import { Header } from '../../components';
import { ViewRouter } from '../ViewRouter';

import { StyledLayoutWrapper, StyledBody } from './styles';

export const Layout = () => {
    return (
        <StyledLayoutWrapper>
            <Header />
            <StyledBody />
            <ViewRouter />
        </StyledLayoutWrapper>
    );
};
