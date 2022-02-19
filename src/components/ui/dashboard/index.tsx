import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Select from 'react-select';

import { Button, Header } from '../..';
import { lightgrey1 } from '../../../GlobalStyles';

interface CurrencyType {
    value: string;
    label: string;
    symbol: string;
}

interface SortType {
    value: string;
    label: string;
}

const currencyOptions = [
    { value: 'usd', label: 'USD $', symbol: '$' },
    { value: 'eur', label: 'EUR €', symbol: '€' },
    { value: 'gbp', label: 'GBP £', symbol: '£' }
];

const sortingOptions = [
    { value: 'gecko_desc', label: 'Gecko Desc' },
    { value: 'gecko_asc', label: 'Gecko Asc' },
    { value: 'market_cap_asc', label: 'Market Cap Asc' },
    { value: 'market_cap_desc', label: 'Market Cap Desc' },
    { value: 'volume_asc', label: 'Volume Asc' },
    { value: 'volume_desc', label: 'Volume Desc' },
    { value: 'id_asc', label: 'ID Asc' },
    { value: 'id_desc', label: 'ID Desc' }
];

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

const customStyles = {
    control: (base: any, state: { isFocused: any }) => ({
        ...base,
        background: '#000000',
        borderRadius: state.isFocused ? '3px 3px 0 0' : 3,
        borderColor: '#d8d8d8',
        boxShadow: null,
        height: '20px',
        '&:hover': {
            borderColor: '#c5c5c5'
        },
        cursor: 'pointer'
    }),
    menu: (base: any) => ({
        ...base,
        background: '#000000',
        borderRadius: 7,
        hyphens: 'auto',
        marginTop: 0,
        textAlign: 'left',
        wordWrap: 'break-word',
        height: '20px'
    }),
    menuList: (base: any) => ({
        ...base,
        padding: 0,
        borderRadius: 3,
        '&:hover': {
            background: '#000000'
        }
    }),
    option: (base: any, state: { isFocused: boolean; isSelected: boolean }) => ({
        ...base,
        background: state.isSelected ? '#000000' : '#8d8d8d',
        padding: 10,
        cursor: state.isSelected ? 'default' : 'pointer',
        '&:hover': {
            background: '#d4d4d4'
        }
    }),
    singleValue: (base: any) => ({
        ...base,
        color: '#ffffff'
    })
};

const StyledContainer = styled.div`
    user-select: none;
`;

const StyledText = styled.span`
    color: ${lightgrey1};
    font-size: 16px;
    align-self: center;
`;

const StyledButton = styled(Button)`
    align-self: center;
    margin: 10px;
`;

const StyledHeader = styled(Header)`
    > * {
        :last-child {
            justify-content: flex-end;
        }
    }
`;

const StyledHeadTr = styled.tr`
    height: 50px;
`;

const StyledHeaderRight = styled.div`
    display: flex;
    align-self: center;
    align-items: center;
    width: 100%;
    column-gap: 10px;
`;

const StyledContentLeft = styled.div`
    align-self: center;
    min-width: 100px;
`;

const StyledBody = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding-bottom: 60px;
`;

const StyledSidebar = styled.div`
    top: 60px;
    width: 18%;
    height: 100%;
    background: #101010;
    position: fixed;

    > * {
        color: white;
        padding: 20px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        user-select: none;

        :hover {
            background: #3f3f3fac;
        }
    }
`;

const StyledFooter = styled.div`
    background: #101010;
    display: flex;
    justify-content: space-evenly;
    height: 60px;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;

    > * {
        color: white;
        padding: 20px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        user-select: none;
        :hover {
            background: #3f3f3fac;
        }
    }
`;

const StyledButtonFooter = styled(Button)``;

const StyledContent = styled.div`
    height: inherit;
    width: 100%;
    background: #474747;
`;

const StyledSubBody = styled.div`
    padding: 20px 20px 80px 20px;
    top: 60px;
    box-sizing: border-box;
    width: calc(82%);
    height: 100%;
    left: 18%;
    position: relative;

    @media (max-width: 550px) {
        display: block;
        overflow-x: auto;
    }
`;

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

const StyledLoading = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 32px;
    height: 100vh;
    width: 100%;
    align-items: center;
    font-weight: 600;
`;

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

const StyledPriceTd = styled.td<StyledPriceTdProps>`
    text-align: center;
    color: ${setPriceChangeValue};
`;

const StyledTd = styled.td`
    text-align: center;
`;

const StyledImage = styled.img`
    width: 30px;
`;

const StyledTbody = styled.tbody``;

export const DashboardUI: React.FC = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<[]>();
    const [currency, setCurrency] = useState<CurrencyType>(currencyOptions[0]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [contentLoading, setContentLoading] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const [order, setOrder] = useState<SortType>(sortingOptions[0]);

    function handleCurrencyChange(selectedOption: any) {
        if (selectedOption !== currency) {
            setContentLoading(true);
            setCurrency(selectedOption as CurrencyType);
        }
    }

    function handleSorting(selectedOption: any) {
        if (selectedOption !== order) {
            setContentLoading(true);
            setOrder(selectedOption as SortType);
        }
    }

    function days_passed(date: Date) {
        const current = new Date(date.getTime());
        const previous = new Date(date.getFullYear(), 0, 1);

        return Math.ceil((Number(current) - Number(previous) + 1) / 86400000);
    }

    function handlePageChange(addCount?: boolean) {
        setPage(addCount ? page + 1 : page - 1);
        setContentLoading(true);
    }

    async function fetchCurrencies(url: string) {
        const response = await fetch(url);
        const coins = await response.json();
        return coins;
    }

    useEffect(() => {
        if (!currency) {
            return;
        }

        const currencyLowerCase = currency.value;
        const orderType = order.value;

        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyLowerCase}&order=${orderType}&per_page=${itemsPerPage}&page=${page}&sparkline=false`;

        // eslint-disable-next-line promise/catch-or-return
        fetchCurrencies(url).then((coins) => {
            setTimeout(() => {
                setData(coins);
                setContentLoading(false);
            }, 1000);
        });
    }, [currency, page, itemsPerPage, order]);

    useEffect(() => {
        setLoading(!data);
    }, [data]);

    return (
        <StyledContainer>
            <StyledHeader>
                <StyledContentLeft>
                    <StyledText>Dashboard</StyledText>
                </StyledContentLeft>
                <StyledHeaderRight>
                    <Select
                        value={order}
                        onChange={(val: any) => handleSorting(val)}
                        options={sortingOptions}
                        styles={customStyles}
                        isDisabled={contentLoading || loading}
                    />
                    <Select
                        value={currency}
                        onChange={(val: any) => handleCurrencyChange(val)}
                        options={currencyOptions}
                        styles={customStyles}
                        isDisabled={contentLoading || loading}
                    />
                    <StyledButton size="large" label="Back" onClick={() => navigate('/')} />
                </StyledHeaderRight>
            </StyledHeader>
            <StyledBody>
                <StyledSidebar>
                    <div onClick={() => !contentLoading && navigate('/dashboard')}>Home</div>
                    <div onClick={() => !contentLoading && navigate('/wallet')}>Wallet</div>
                    <div onClick={() => !contentLoading && navigate('/settings')}>Settings</div>
                </StyledSidebar>
                <StyledContent>
                    <StyledSubBody>
                        {loading ? (
                            <StyledLoading>Loading</StyledLoading>
                        ) : (
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
                                                <StyledPriceTd
                                                    isNegative={
                                                        Math.sign(coins.price_change_percentage_24h) === -1
                                                    }
                                                >
                                                    {`${coins?.price_change_percentage_24h?.toFixed(2)}%`}
                                                </StyledPriceTd>
                                                <StyledTd>
                                                    {`${coins?.market_cap_change_percentage_24h?.toFixed(
                                                        2
                                                    )}%`}
                                                </StyledTd>
                                                <StyledTd>{days_passed(new Date(coins.ath_date))}</StyledTd>
                                            </StyledCurrency>
                                        ))}
                                </StyledTbody>
                            </StyledSubHeader>
                        )}
                    </StyledSubBody>
                </StyledContent>
            </StyledBody>
            <StyledFooter>
                <StyledButtonFooter
                    label="Previous Page"
                    size="large"
                    onClick={() => handlePageChange()}
                    disabled={(page === 1 && !contentLoading) || contentLoading || loading}
                />
                <StyledButtonFooter
                    disabled={contentLoading || loading}
                    label="Next Page"
                    size="large"
                    onClick={() => handlePageChange(true)}
                />
            </StyledFooter>
        </StyledContainer>
    );
};
