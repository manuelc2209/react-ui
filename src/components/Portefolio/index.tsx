import React from 'react';

import {
    StyledCard,
    StyledCardContainer,
    StyledHeadline,
    StyledImage,
    StyledLabel,
    StyledLink,
    StyledTextContainer,
    StyledWrapper
} from './styles';
import { PortefolioProps } from './types';

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
