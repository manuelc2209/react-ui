import styled from 'styled-components';

export const StyledContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
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

export const StyledVideoContainer = styled.div`
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 100%;
    overflow: hidden;
    left: 0;
`;

export const StyledOverlay = styled.div`
    position: absolute;
    top: 0;
    height: inherit;
    display: flex;
    flex: 1;
    background-color: #1e476c6e;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

export const StyledColumn = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;

    @media (max-width: 450px) {
        width: 100%;
    }

    @media (max-width: 900px) {
        width: 100%;
    }
`;
