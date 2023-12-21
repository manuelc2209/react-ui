import styled from 'styled-components';

import { Card } from '../../components';

export const StyledContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const StyledVideoContainer = styled.div`
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 100%;
    overflow: hidden;
    left: 0;
`;

export const StyledVideo = styled.video`
    display: flex;
    flex-direction: row;
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    position: relative;
    height: inherit;
    overflow: auto;

    @media (max-width: 450px) {
        height: 100%;
        flex-direction: column;
        flex: 1;
    }

    @media (max-width: 900px) {
        height: 100%;
    }
`;

export const StyledOverlay = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    flex: 1;
    background-color: #1e476c6e;
    gap: 20px;
    -webkit-column-gap: 20px;
    column-gap: 20px;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    overflow-y: auto;
    height: 100%;
    width: 100%;

    position: absolute;
    top: 0;

    @media (max-width: 900px) {
        padding: 20px 20px 80px 20px;
        flex-direction: column;
        justify-content: flex-start;
        flex-wrap: nowrap;
    }
`;

export const StyledCard = styled(Card)`
    width: 250px;
    background: #2b2b2b;
    color: white;
`;
