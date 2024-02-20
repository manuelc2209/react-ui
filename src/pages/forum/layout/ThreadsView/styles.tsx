import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: grid;
    flex: 1;
    padding: 1rem 1rem;
    overflow-y: auto;
    gap: 16px;

    @media (min-width: 750px) {
        display: flex;
    }
`;

export const StyledThreadContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 16px;
`;

export const StyledSideSection = styled.div`
    width: 300px;
    position: relative;
`;

export const StyledFixedContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
    background-color: #f7f7f7;
`;
