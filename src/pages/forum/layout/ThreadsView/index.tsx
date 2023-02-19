import { nanoid } from 'nanoid';
import React, { useContext } from 'react';

import { Thread } from '../../components';
import { ForumContext } from '../../context/forumContext';

import { StyledContainer, StyledSideSection, StyledThreadContainer } from './styles';

export const ThreadsView = () => {
    const { threads } = useContext(ForumContext);

    return (
        <StyledContainer>
            <StyledThreadContainer>
                {threads?.map((thread) => (
                    <Thread
                        key={nanoid()}
                        avatar={thread.avatar}
                        sideSection={thread.sideSection}
                        title={thread.title}
                        subtitle={thread.subtitle}
                    />
                ))}
            </StyledThreadContainer>
            <StyledSideSection>
                <div>sample</div>
            </StyledSideSection>
        </StyledContainer>
    );
};
