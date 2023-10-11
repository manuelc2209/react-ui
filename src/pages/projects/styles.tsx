import styled from 'styled-components';

import { Card, Header } from '../../components';
import { COLOR_PRIMARY_2 } from '../../GlobalStyles';

export const StyledContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const StyledContent = styled.div`
    display: block;
    position: relative;
    background-image: url('https://64.media.tumblr.com/2df67fe7bdbba84c88cdbbdf84fd2743/tumblr_nqgvxz92HC1s85u2fo1_500.gif');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    height: 100%;
    width: 100%;

    box-sizing: border-box;

    @media (max-width: 750px) {
        flex-direction: column;
        flex: 1;
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

export const StyledHeader = styled(Header)`
    border-bottom: 1px solid ${COLOR_PRIMARY_2};
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 60px;
    align-items: center;

    > * {
        margin: 10px;
    }
`;
