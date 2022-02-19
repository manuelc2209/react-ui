import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { COLOR_PRIMARY_1 } from '../../GlobalStyles';

interface CardProps {
    title?: string;
    subtitle?: string;
    image?: string;
    newTab?: boolean;
    href?: string;
    className?: string;
}

interface StyledBodyWrapperProps {
    hasImage?: string;
}

const calcMargin = ({ hasImage }: StyledBodyWrapperProps) => {
    return hasImage ? 'margin-top: 5px;' : '';
};

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 14px;
    border: 1px solid ${COLOR_PRIMARY_1};
    border-radius: 7px;
    height: 195px;
`;

const StyledImageWrapper = styled.div``;

const StyledBodyWrapper = styled.div<StyledBodyWrapperProps>`
    display: flex;
    flex-direction: column;
    ${calcMargin}
`;

const StyledLink = styled.a``;

const StyledImage = styled.img`
    width: 100%;
    height: 150px;
    border-radius: 7px;
    object-fit: cover;
`;

const StyledTitle = styled.span`
    font-size: 18px;
    font-weight: 600;
`;

const StyledSubtitle = styled.span`
    font-size: 14px;
    font-weight: 400;
`;

export const Card: React.FC<CardProps> = ({ title, subtitle, image, href, newTab, className }: CardProps) => {
    const hasImage = image;
    const hasHref = href;
    return (
        <StyledCard className={className}>
            {newTab ? (
                <StyledLink href={hasHref} target={newTab ? '_blank' : '_self'}>
                    <StyledImageWrapper>{hasImage && <StyledImage src={image} />}</StyledImageWrapper>
                </StyledLink>
            ) : (
                <Link to={href || '/'}>
                    <StyledImageWrapper>{hasImage && <StyledImage src={image} />}</StyledImageWrapper>
                </Link>
            )}
            <StyledBodyWrapper hasImage={hasImage}>
                {title && <StyledTitle>{title}</StyledTitle>}
                {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
            </StyledBodyWrapper>
        </StyledCard>
    );
};
