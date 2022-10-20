import React from 'react';
import styled, { css } from 'styled-components';

import { CurrencyType } from '../shared';

interface TableProps {
    currency: CurrencyType;
    data?: [];
    contentLoading?: boolean;
}

interface CoinType {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: Date;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: null;
    last_updated: string;
}

interface StyledCurrencyProps {
    isLoading?: boolean;
}

interface StyledPriceTdProps {
    isNegative?: boolean;
}

const loadingTheme = css`
    background-color: #ebebebca;
    color: #222222cf;
`;

const defaultTheme = css`
    background-color: white;
`;

const setTheme = ({ isLoading }: { isLoading?: boolean }) => (isLoading ? loadingTheme : defaultTheme);
const setPriceChangeValue = ({ isNegative }: { isNegative?: boolean }) => (isNegative ? 'red' : 'green');

const StyledSubHeader = styled.table`
    background-color: #dbdbdb;
    width: 100%;
    height: 100%;
    border-radius: 5px;
`;

const StyledCurrency = styled.tr<StyledCurrencyProps>`
    column-gap: 20px;
    user-select: none;
    cursor: pointer;
    height: 60px;
    padding: 24px;
    align-items: center;
    ${setTheme}

    :hover {
        background-color: #ebebeb;
    }
`;

const StyledPriceTd = styled.td<StyledPriceTdProps>`
    text-align: center;
    color: ${setPriceChangeValue};
`;

const StyledHeadTr = styled.tr`
    height: 50px;
`;

const StyledTd = styled.td`
    text-align: center;
`;

const StyledImage = styled.img`
    width: 30px;
`;

const StyledTbody = styled.tbody``;

const StyledSpan = styled.span``;

const StyledTdLeft = styled.td`
    padding-left: 24px;
    text-align: left;
    display: flex;
    align-items: center;
    height: inherit;
    column-gap: 14px;

    ${StyledSpan} {
        :last-child {
            font-weight: 600;
        }
    }
`;

function days_passed(date: Date) {
    const current = new Date(date.getTime());
    const previous = new Date(date.getFullYear(), 0, 1);

    return Math.ceil((Number(current) - Number(previous) + 1) / 86400000);
}

const getValues = (coins: { price_change_percentage_24h: number } | undefined): string => {
    const price = coins?.price_change_percentage_24h?.toFixed(2);

    return price ? `${price}%` : 'N/A';
};

const getChange = (coins: { market_cap_change_percentage_24h: number } | undefined): string => {
    const price = coins?.market_cap_change_percentage_24h?.toFixed(2);

    return price ? `${price}%` : 'N/A';
};

export const Table: React.FC<TableProps> = ({ data, contentLoading, currency }) => {
    return (
        <StyledSubHeader>
            <thead>
                <StyledHeadTr>
                    <th title="Rank By Market Cap">Rank</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Change</th>
                    <th>24(h) Volume</th>
                    <th>Days Since ATH</th>
                </StyledHeadTr>
            </thead>
            <StyledTbody>
                {data &&
                    data.map((coins: CoinType) => (
                        <StyledCurrency isLoading={contentLoading} key={coins.id}>
                            <StyledTd>{coins.market_cap_rank}</StyledTd>
                            <StyledTdLeft>
                                <StyledImage src={coins.image} />
                                <StyledSpan>{coins.name}</StyledSpan>-
                                <StyledSpan>{coins.symbol.toUpperCase()}</StyledSpan>
                            </StyledTdLeft>
                            <StyledTd>
                                {coins.current_price}
                                {currency.symbol}
                            </StyledTd>
                            <StyledPriceTd isNegative={Math.sign(coins.price_change_percentage_24h) === -1}>
                                {getValues(coins)}
                            </StyledPriceTd>
                            <StyledTd>{getChange(coins)}</StyledTd>
                            <StyledTd>{days_passed(new Date(coins.ath_date))}</StyledTd>
                        </StyledCurrency>
                    ))}
            </StyledTbody>
        </StyledSubHeader>
    );
};
