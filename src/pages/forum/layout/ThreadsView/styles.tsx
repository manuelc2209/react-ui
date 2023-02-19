import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex: 1;
    padding: 1rem 10rem;
    overflow-y: auto;
    gap: 16px;
`;

export const StyledThreadContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 16px;
`;

export const StyledSideSection = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 300px;
    padding: 16px;
    gap: 16px;
    background-color: #f7f7f7;
    border: 1px solid #dddddd;
`;
