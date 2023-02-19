import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    gap: 32px;
    padding: 16px;
    flex: 1;
    box-sizing: border-box;
    background-color: #f7f7f7;
    border: 1px solid #dddddd;
    justify-content: space-between;
    min-height: 100px;
`;

export const StyledStart = styled.div`
    flex-direction: column;
`;

export const StyledMiddle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const StyledEnd = styled.div`
    flex-direction: column;
`;
