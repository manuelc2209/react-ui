import styled, { css } from 'styled-components';

import { Card } from '../Card';

export const alignCenter = css`
    text-align: center;
`;

export const StyledHeadline = styled.span`
    margin: 20px 0 15px 0;
    font-size: 30px;
    color: white;
`;

export const StyledLabel = styled.span`
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: white;
`;

export const StyledImage = styled.img`
    max-height: 178px;
    max-width: 178px;
    object-fit: cover;
    width: 50%;
    height: 70%;
    border-radius: 50%;
    margin: auto;
    border: 2px solid white;
`;

export const StyledLink = styled.a`
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

export const StyledTextContainer = styled.div`
    margin-bottom: 50px;
    font-size: 1.5rem;
    padding: 20px;
    * {
        margin-bottom: 20px;
    }
`;

export const StyledCardContainer = styled.div`
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

export const StyledCard = styled(Card)`
    background: #344653;
    width: auto;
    width: 100%;
    max-width: 300px;
    box-sizing: border-box;
`;

export const StyledSocialSection = styled.div`
    margin-top: 50px;
`;

export const StyledWrapper = styled.div`
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
