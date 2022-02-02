import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Button, Header } from '../..';
import { lightgrey1 } from '../../../GlobalStyles';
import Select, { Theme } from 'react-select';

type CurrencyType = { value: string; label: string; symbol: string };
type OrderType =
    | 'market_cap_desc'
    | 'gecko_desc'
    | 'gecko_asc'
    | 'market_cap_asc'
    | 'market_cap_desc'
    | 'volume_asc'
    | 'volume_desc'
    | 'id_asc'
    | 'id_desc';

const options = [
    { value: 'usd', label: 'USD $', symbol: '$' },
    { value: 'eur', label: 'EUR €', symbol: '€' },
    { value: 'gbp', label: 'GBP £', symbol: '£' }
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
    ath_date: string;
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
        borderColor: '#c5c5c5',
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
        background: state.isSelected ? '#000000' : '#555555',
        padding: 10,
        cursor: state.isSelected ? 'default' : 'pointer',
        '&:hover': {
            background: '#bbbbbb'
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
    margin: 15px;
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
    width: 400px;
`;

const StyledContentLeft = styled.div`
    align-self: center;
    width: 100%;
`;

const StyledBody = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

const StyledSidebar = styled.div`
    width: 18%;
    height: inherit;
    background: #101010;
    height: auto;

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

const StyledContent = styled.div`
    height: inherit;
    width: 100%;
    background: #474747;
`;

const StyledSubBody = styled.div`
    padding: 20px 20px 0px 20px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
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
    let navigate = useNavigate();
    const [data, setData] = useState<[]>();
    const [currency, setCurrency] = useState<CurrencyType>(options[0] as CurrencyType);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const [order, setOrder] = useState<OrderType>('market_cap_desc');

    function handleCurrencyChange(selectedOption: any) {
        if (selectedOption !== currency) {
            setLoading(true);
            setCurrency(selectedOption as CurrencyType);
        }
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
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyLowerCase}&order=${order}&per_page=${itemsPerPage}&page=${page}&sparkline=false`;

        fetchCurrencies(url).then((coins) => {
            setTimeout(() => {
                console.log(coins);
                setData(coins);
                setLoading(false);
            }, 1000);
        });
    }, [currency, page, itemsPerPage]);

    return (
        <StyledContainer>
            <StyledHeader>
                <StyledContentLeft>
                    <StyledText>Dashboard</StyledText>
                </StyledContentLeft>
                <StyledHeaderRight>
                    <Select
                        value={currency}
                        onChange={(val: any) => handleCurrencyChange(val)}
                        options={options as any}
                        styles={customStyles}
                    />
                    <StyledButton label="Back" onClick={() => navigate('/')} />
                </StyledHeaderRight>
            </StyledHeader>
            <StyledBody>
                <StyledSidebar>
                    <div onClick={() => navigate('/dashboard')}>Home</div>
                    <div onClick={() => navigate('/wallet')}>Wallet</div>
                    <div onClick={() => navigate('/settings')}>Settings</div>
                </StyledSidebar>
                <StyledContent>
                    <StyledSubBody>
                        <StyledSubHeader>
                            {data ? (
                                <>
                                    <thead>
                                        <StyledHeadTr>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Change</th>
                                            <th>24(h) Volume</th>
                                            <th>Total Supply</th>
                                        </StyledHeadTr>
                                    </thead>
                                    <StyledTbody>
                                        {data.map((coins: CoinType) => (
                                            <StyledCurrency isLoading={loading}>
                                                <StyledTdLeft>
                                                    <StyledImage src={coins.image} />
                                                    <StyledSpan>{coins.name}</StyledSpan>
                                                    {`-`}
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
                                                    {`${coins.price_change_percentage_24h.toFixed(2)}%`}
                                                </StyledPriceTd>
                                                <StyledTd>{coins.market_cap_change_24h}</StyledTd>
                                                <StyledTd>{coins.total_volume}</StyledTd>
                                            </StyledCurrency>
                                        ))}
                                    </StyledTbody>
                                </>
                            ) : (
                                <StyledLoading>Loading</StyledLoading>
                            )}
                        </StyledSubHeader>
                    </StyledSubBody>
                </StyledContent>
            </StyledBody>
        </StyledContainer>
    );
};
