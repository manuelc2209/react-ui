import React from 'react';

import { Header } from '../../components';

import { StyledLayoutWrapper, StyledBody } from './styles';

export const Container = () => {
    return (
        <StyledLayoutWrapper>
            <Header />
            <StyledBody />
        </StyledLayoutWrapper>
    );
};
