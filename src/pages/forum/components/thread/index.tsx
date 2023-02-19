import React from 'react';

import { StyledContainer, StyledEnd, StyledMiddle, StyledStart } from './styles';
import { ThreadProps } from './types';

export const Thread: React.FC<ThreadProps> = ({ avatar, title, subtitle, sideSection }: ThreadProps) => {
    return (
        <StyledContainer>
            <StyledStart>{avatar}</StyledStart>
            <StyledMiddle>
                <div>{title}</div>
                <div>{subtitle}</div>
            </StyledMiddle>
            <StyledEnd>
                <div>{sideSection.replies}</div>
                <div>{sideSection.views}</div>
                <div>{new Date(sideSection.postTimeTracker).toLocaleDateString()}</div>
            </StyledEnd>
        </StyledContainer>
    );
};
