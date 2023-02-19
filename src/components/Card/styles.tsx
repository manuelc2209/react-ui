import styled from 'styled-components';

import { COLOR_PRIMARY_1 } from '../../GlobalStyles';

import { StyledBodyWrapperProps, StyledSubtitleProps } from './types';

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${COLOR_PRIMARY_1};
    border-radius: 7px;
    max-height: 310px;
    height: 100%;
    user-select: none;
`;

export const StyledImageWrapper = styled.div``;

export const StyledBodyWrapper = styled.div<StyledBodyWrapperProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 10px;
    gap: 8px;
`;

export const StyledImage = styled.img`
    width: 100%;
    height: 150px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    object-fit: cover;
`;

export const StyledTitle = styled.span`
    font-size: 18px;
    font-weight: 600;
`;

export const isActionCard = ({ isActionCard }: { isActionCard?: boolean }) =>
    isActionCard ? '40px' : '20px';

export const StyledSubtitle = styled.span<StyledSubtitleProps>`
    font-size: 14px;
    font-weight: 400;
    height: ${isActionCard};
    overflow: hidden;
`;

export const StyledLinkWrapper = styled.a`
    color: white;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }

    &:visited {
        color: white;
    }

    &:active {
        color: white;
    }
`;

export const StyledDivWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const StyledButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    * {
        margin: 0 20px;
        flex: 1;
    }
`;
