import dayjs from 'dayjs';
import React from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';

import { StyledContainer, StyledEnd, StyledMiddle, StyledStart } from './styles';
import { ThreadProps } from './types';

dayjs.extend(relativeTime);

export const Thread: React.FC<ThreadProps> = ({ avatar, title, subtitle, sideSection, user }) => {
    return (
        <StyledContainer>
            <StyledStart src={avatar} />
            <StyledMiddle>
                <div>{title}</div>
                <div>{subtitle}</div>
            </StyledMiddle>
            <StyledEnd>
                <div>{sideSection.replies}</div>
                <div>{sideSection.views}</div>
                <div>{dayjs(sideSection.postTimeTracker).fromNow()}</div>
            </StyledEnd>
        </StyledContainer>
    );
};
