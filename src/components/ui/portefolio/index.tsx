import React from 'react';
import styled, { css } from 'styled-components';

interface pubLinksData {
    link?: string;
    linkLabel?: string;
}

interface pubLinks {
    label?: string;
    data?: pubLinksData[];
}

interface PortefolioProps {
    img?: string;
    headline?: string;
    label?: string;
    link?: string;
    linkLabel?: string;
    socialLinks?: pubLinks;
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
    color: white;
`;

const StyledImage = styled.img`
    max-height: 178px;
    max-width: 178px;
    object-fit: cover;
    width: 50%;
    height: 70%;
    border-radius: 50%;
    border: 1px solid;
    margin: auto;
`;

const StyledLink = styled.a``;

const StyledTextContainer = styled.div``;

const StyledLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;

    ${StyledLink} {
        margin: 15px;
    }
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
        padding: 10px;
    }
`;

export const Portefolio: React.FC<PortefolioProps> = ({
    img,
    headline,
    label,
    link,
    linkLabel,
    socialLinks
}) => {
    return (
        <StyledWrapper>
            {img && <StyledImage src={img}></StyledImage>}
            {headline && <StyledHeadline>{headline}</StyledHeadline>}
            <StyledTextContainer>
                {link && linkLabel
                    ? label && (
                          <StyledLabel>
                              {label}
                              <StyledLink href={link}>{linkLabel}</StyledLink>
                          </StyledLabel>
                      )
                    : label && <StyledLabel>{label}</StyledLabel>}
            </StyledTextContainer>
            {socialLinks && (
                <StyledSocialSection>
                    <StyledLabel>{socialLinks.label}</StyledLabel>
                    <StyledLinkContainer>
                        {socialLinks &&
                            socialLinks!.data!.map((item) => (
                                <StyledLink href={item.link} key={item.link}>
                                    {item.linkLabel}
                                </StyledLink>
                            ))}
                    </StyledLinkContainer>
                </StyledSocialSection>
            )}
        </StyledWrapper>
    );
};
