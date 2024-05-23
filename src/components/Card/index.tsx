import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../Button';

import {
    StyledCard,
    StyledDivWrapper,
    StyledImageWrapper,
    StyledImage,
    StyledBodyWrapper,
    StyledTitle,
    StyledSubtitle,
    StyledButtonContainer,
    StyledLinkWrapper
} from './styles';
import { CardProps } from './types';

export const Card = ({ title, subtitle, image, href, isActionCard, className }: CardProps) => {
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
