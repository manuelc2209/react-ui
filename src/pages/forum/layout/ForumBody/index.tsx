import React, { useContext } from 'react';

import { ForumContext, ForumContextWrapper } from '../../context/forumContext';

import { StyledContainer } from './styles';

export const ForumBody = () => {
    const { threads } = useContext(ForumContext);

    return (
        <ForumContextWrapper>
            <StyledContainer>Forum Body</StyledContainer>
        </ForumContextWrapper>
    );
};
