import React from 'react';

import {
    StyledCard,
    StyledCardContainer,
    StyledFlexContainer,
    StyledHeaderLabelContainer,
    StyledHeadline,
    StyledImage,
    StyledImageStack,
    StyledItemStack,
    StyledLabel,
    StyledLabelHeader,
    StyledStackItemLabel,
    StyledStackList,
    StyledSubtitle,
    StyledTextContainer,
    StyledWrapper
} from './styles';
import { PortefolioProps } from './types';

export const Portefolio = ({ img, headline, label, currentStack, otherStack, cards }: PortefolioProps) => {
    return (
        <StyledWrapper>
            <div>
                <StyledFlexContainer>
                    {img && <StyledImage src={img} />}
                    <StyledHeaderLabelContainer>
                        {headline && <StyledHeadline>{headline}</StyledHeadline>}
                        {label && <StyledSubtitle>{label}</StyledSubtitle>}
                    </StyledHeaderLabelContainer>
                </StyledFlexContainer>
                <StyledTextContainer>
                    <StyledLabel>
                        <div>
                            <StyledLabelHeader>Working with the following technologies:</StyledLabelHeader>
                            <StyledStackList>
                                {currentStack?.map((stack) => (
                                    <StyledItemStack key={stack.name}>
                                        <StyledStackItemLabel>{stack.name}</StyledStackItemLabel>
                                        {stack.logoUrl && (
                                            <StyledImageStack src={stack.logoUrl} alt={stack.name} />
                                        )}
                                    </StyledItemStack>
                                ))}
                            </StyledStackList>
                        </div>
                    </StyledLabel>
                </StyledTextContainer>
            </div>
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
