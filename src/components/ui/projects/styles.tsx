import styled from 'styled-components';

import { COLOR_PRIMARY_2 } from '../../../GlobalStyles';
import { Card } from '../../Card';
import { Header } from '../../Header';

export const StyledContainer = styled.div`
    height: inherit;
    display: flex;
    flex-direction: column;
`;

export const StyledContent = styled.div`
    display: flex;
    flex-direction: row;
    background-image: url('https://64.media.tumblr.com/2df67fe7bdbba84c88cdbbdf84fd2743/tumblr_nqgvxz92HC1s85u2fo1_500.gif');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    overflow: auto;

    @media (max-width: 750px) {
        flex-direction: column;
        flex: 1;
    }

    @media (min-width: 900px) {
        top: 60px;
    }
`;

export const StyledOverlay = styled.div`
    display: flex;
    flex: 1;
    background-color: #1e476c6e;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    place-items: center;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
    column-gap: 20px;
    padding: 60px 20px;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

export const StyledCard = styled(Card)`
    width: 250px;
    background: #2b2b2b;
    color: white;
`;

export const StyledHeader = styled(Header)`
    border-bottom: 1px solid ${COLOR_PRIMARY_2};

    > * {
        margin: 10px;
    }
`;
