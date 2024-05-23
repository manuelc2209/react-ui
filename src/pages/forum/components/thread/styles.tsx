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

export const StyledStart = styled.img`
    display: block;
    max-height: 95px;
    width: auto;
    height: auto;
`;

export const StyledMiddle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const StyledEnd = styled.div`
    width: 100px;
    white-space: nowrap;
    flex-direction: column;
    overflow: hidden;
`;
