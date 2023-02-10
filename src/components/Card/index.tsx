import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { COLOR_PRIMARY_1 } from '../../GlobalStyles';
import { Button } from '../Button';

interface CardProps {
    title?: string;
    subtitle?: string;
    image?: string;
    isActionCard?: boolean;
    href?: {
        github: string;
        website: string;
    };
    className?: string;
}

interface StyledBodyWrapperProps {
    hasImage?: string;
}

interface StyledSubtitleProps {
    isActionCard?: boolean;
}

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${COLOR_PRIMARY_1};
    border-radius: 7px;
    max-height: 310px;
    height: 100%;
    user-select: none;
`;

const StyledImageWrapper = styled.div``;

const StyledBodyWrapper = styled.div<StyledBodyWrapperProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 10px;
    gap: 8px;
`;

const StyledImage = styled.img`
    width: 100%;
    height: 150px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    object-fit: cover;
`;

const StyledTitle = styled.span`
    font-size: 18px;
    font-weight: 600;
`;

const isActionCard = ({ isActionCard }: { isActionCard?: boolean }) => (isActionCard ? '40px' : '20px');

const StyledSubtitle = styled.span<StyledSubtitleProps>`
    font-size: 14px;
    font-weight: 400;
    height: ${isActionCard};
    overflow: hidden;
`;

const StyledLinkWrapper = styled.a`
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

const StyledDivWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const StyledButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    * {
        margin: 0 20px;
        flex: 1;
    }
`;

export const Card: React.FC<CardProps> = ({
    title,
    subtitle,
    image,
    href,
    isActionCard,
    className
}: CardProps) => {
    const navigate = useNavigate();
    const hasImage = image;
    const hasHref = href;

    const isOutsideHref = () =>
        href?.website.startsWith('/')
            ? navigate(href?.website)
            : (window.location = href?.website as (string | Location) & Location);

    return (
        <StyledCard className={className}>
            {isActionCard ? (
                <StyledDivWrapper>
                    <StyledImageWrapper>{hasImage && <StyledImage src={image} />}</StyledImageWrapper>
                    <StyledBodyWrapper hasImage={hasImage}>
                        {title && <StyledTitle>{title}</StyledTitle>}
                        {subtitle && (
                            <StyledSubtitle isActionCard={Boolean(isActionCard)}>{subtitle}</StyledSubtitle>
                        )}
                        {isActionCard && (
                            <StyledButtonContainer>
                                <Button
                                    label="Live"
                                    disabled={!href?.website}
                                    onClick={() => {
                                        isOutsideHref();
                                    }}
                                />
                                <Button
                                    label="Code"
                                    disabled={!hasHref?.github}
                                    onClick={() =>
                                        (window.location = href?.github as (string | Location) & Location)
                                    }
                                />
                            </StyledButtonContainer>
                        )}
                    </StyledBodyWrapper>
                </StyledDivWrapper>
            ) : (
                <StyledLinkWrapper href={href?.website || href?.github}>
                    <StyledImageWrapper>{hasImage && <StyledImage src={image} />}</StyledImageWrapper>
                    <StyledBodyWrapper hasImage={hasImage}>
                        {title && <StyledTitle>{title}</StyledTitle>}
                        {subtitle && (
                            <StyledSubtitle isActionCard={Boolean(isActionCard)}>{subtitle}</StyledSubtitle>
                        )}
                        {isActionCard && (
                            <StyledButtonContainer>
                                <Button
                                    label="Live"
                                    disabled={!href?.website}
                                    onClick={() =>
                                        (window.location = href?.website as (string | Location) & Location)
                                    }
                                />
                                <Button
                                    label="Code"
                                    disabled={!hasHref?.github}
                                    onClick={() =>
                                        (window.location = href?.github as (string | Location) & Location)
                                    }
                                />
                            </StyledButtonContainer>
                        )}
                    </StyledBodyWrapper>
                </StyledLinkWrapper>
            )}
        </StyledCard>
    );
};
