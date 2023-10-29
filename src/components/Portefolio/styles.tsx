import styled, { css } from 'styled-components';

import { Card } from '../Card';

export const alignCenter = css`
    text-align: center;
`;

export const StyledHeadline = styled.h1`
    margin: 20px 0 15px 0;
    font-size: 30px;
    color: white;
`;

export const StyledSubtitle = styled.h2`
    margin: 20px 0 15px 0;
    font-size: 16px;
    font-weight: 500;
    line-height: initial;
    color: white;
    max-width: 600px;
    text-align: justify;

    @media (max-width: 600px) {
        text-align: center;
    }
`;

export const StyledLabelHeader = styled.span`
    display: flex;
    flex-direction: column;
    color: white;
    padding-bottom: 1rem;
`;

export const StyledLabel = styled.span`
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: white;
`;

export const StyledStackItemLabel = styled.span`
    font-weight: 500;
    font-size: 1.2rem;
    position: relative;
    z-index: 1;
    user-select: none;
`;

export const StyledHeaderLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const StyledFlexContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;

    @media (max-width: 600px) {
        flex-direction: column;
        padding: 20px;
    }
`;

export const StyledImageStack = styled.img`
    height: 50px;
    top: 3px;
    right: 3px;
    position: absolute;
    object-fit: contain;
`;

export const StyledImage = styled.img`
    max-height: 178px;
    max-width: 178px;
    object-fit: cover;
    width: 50%;
    height: 70%;
    border-radius: 50%;
    margin: 0;
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
    font-size: 1.5rem;
    padding: 20px 0;
`;

export const StyledStackList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-y: auto;
    gap: 10px;
`;

export const StyledItemStack = styled.div`
    display: flex;
    position: relative;
    background-color: #3332321f;
    border-bottom: 1px solid #ccc;
    transition: background-color 0.3s ease;
    margin-bottom: 10px;
    flex-basis: calc(33% - 20px);
    margin-bottom: 10px;
    padding: 20px;
    font-size: 1rem;
    box-sizing: border-box;
    overflow: hidden;

    @media screen and (max-width: 767px) {
        flex-basis: 100%;
    }

    :hover {
        background-color: #e3e3e336;
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
    height: 100%;
    padding: 50px;
    color: white;
    justify-content: space-between;
    overflow-y: auto;

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
