import React from 'react';
import styled, { css } from 'styled-components';

import { Card } from '../Card';

interface PubLinksData {
    link?: string;
    linkLabel?: string;
}

interface PubLinks {
    label?: string;
    data?: PubLinksData[];
}

interface CardType {
    title?: string;
    subtitle?: string;
    image?: string;
    href?: {
        github: string;
        website: string;
    };
}

interface PortefolioProps {
    img?: string;
    headline?: string;
    label?: string;
    link?: string;
    linkLabel?: string;
    cards?: CardType[];
}

const alignCenter = css`
    text-align: center;
`;

const StyledHeadline = styled.span`
    margin: 20px 0 15px 0;
    font-size: 30px;
    color: white;
`;

const StyledLabel = styled.span`
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: white;
`;

const StyledImage = styled.img`
    max-height: 178px;
    max-width: 178px;
    object-fit: cover;
    width: 50%;
    height: 70%;
    border-radius: 50%;
    margin: auto;
    border: 2px solid white;
`;

const StyledLink = styled.a`
    color: white;
    text-decoration: underline;
    padding-left: 16px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
        color: white;
    }

    &:visited {
        color: white;
    }

    &:active {
        color: white;
    }
`;

const StyledTextContainer = styled.div`
    margin-bottom: 50px;
    font-size: 1.5rem;
    padding: 20px;
    * {
        margin-bottom: 20px;
    }
`;

const StyledCardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 20px;

    @media (max-width: 600px) {
        flex-direction: column;
        padding: 20px;
    }

    @media only screen and (min-width: 600px) and (max-width: 900px) {
        flex-direction: row;
    }
`;

const StyledCard = styled(Card)`
    background: #344653;
    width: auto;
    width: 100%;
    max-width: 300px;
    box-sizing: border-box;
`;

const StyledSocialSection = styled.div`
    margin-top: 50px;
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
    color: white;

    ${StyledHeadline},
    ${StyledLabel},
    ${StyledTextContainer},
    ${StyledSocialSection} {
        ${alignCenter};
    }

    @media (max-width: 600px) {
        padding: 20px 10px;
        align-items: center;
    }
`;

export const Portefolio: React.FC<PortefolioProps> = ({
    img,
    headline,
    label,
    link,
    linkLabel,
    cards
}: PortefolioProps) => {
    return (
        <StyledWrapper>
            {img && <StyledImage src={img} />}
            {headline && <StyledHeadline>{headline}</StyledHeadline>}
            <StyledTextContainer>
                {link && linkLabel
                    ? label && (
                          <StyledLabel>
                              <span>{label}</span>
                              <div>
                                  Working at:
                                  <StyledLink href={link}>{linkLabel}</StyledLink>
                              </div>
                          </StyledLabel>
                      )
                    : label && <StyledLabel>{label}</StyledLabel>}
            </StyledTextContainer>
            {cards && (
                <StyledCardContainer>
                    {cards.map((card, i) => (
                        <StyledCard
                            key={`card-${card.title}`}
                            title={card.title}
                            subtitle={card.subtitle}
                            image={card.image}
                            href={card.href}
                        />
                    ))}
                </StyledCardContainer>
            )}
        </StyledWrapper>
    );
};
