import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Select from 'react-select';

import { Button, Header } from '../..';
import { lightgrey1 } from '../../../GlobalStyles';
import { UseDebounce, useViewport } from '../../../hooks';

import { Table } from './Table';
import { CurrencyType } from './shared';

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
    { value: 'gecko_desc', label: 'Rank Desc' },
    { value: 'gecko_asc', label: 'Rank Asc' },
    { value: 'market_cap_asc', label: 'Market Cap Asc' },
    { value: 'market_cap_desc', label: 'Market Cap Desc' },
    { value: 'volume_asc', label: 'Volume Asc' },
    { value: 'volume_desc', label: 'Volume Desc' },
    { value: 'id_asc', label: 'ID Asc' },
    { value: 'id_desc', label: 'ID Desc' }
];

interface StyledHeaderRightProps {
    isMobile?: boolean;
}

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
    justify-content: space-between;

    > * {
        :last-child {
            justify-content: flex-end;
        }
    }
`;

const setOverflow = ({ isMobile }: { isMobile?: boolean }) => (isMobile ? 'auto' : 'inherit');

const StyledHeaderRight = styled.div<StyledHeaderRightProps>`
    display: flex;
    align-self: center;
    align-items: center;
    width: 100%;
    column-gap: 10px;
    overflow: ${setOverflow};
`;

const StyledContentLeft = styled.div`
    align-self: center;
    min-width: 100px;
`;

const StyledBody = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background: #101010;
    overflow: overlay;
`;

const StyledFooter = styled.div`
    background: #101010;
    display: flex;
    justify-content: space-evenly;
    height: 60px;
    align-items: center;
    position: sticky;
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
    box-sizing: border-box;
    height: 100%;
    position: relative;

    @media (max-width: 550px) {
        display: block;
        overflow-x: auto;
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

const StyledSelect = styled(Select)``;

const StyledHorizontalScroll = styled.div`
    display: flex;
    align-items: center;
    column-gap: 20px;
    overflow-x: overlay;
    width: 100%;

    ::-webkit-scrollbar {
        display: none;
    }

    ${StyledSelect} {
        min-width: 150px;
        position: initial;
    }
`;

export const DashboardUI: React.FC = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<[]>();
    const [currency, setCurrency] = useState<CurrencyType>(currencyOptions[0]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [contentLoading, setContentLoading] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const [order, setOrder] = useState<SortType>(sortingOptions[0]);
    const { isMobileViewport } = useViewport();
    const isMobile = UseDebounce(isMobileViewport(), 300);

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
                <StyledHeaderRight isMobile={isMobile}>
                    {isMobile ? (
                        <StyledHorizontalScroll>
                            <StyledSelect
                                value={order}
                                onChange={(val: any) => handleSorting(val)}
                                options={sortingOptions}
                                styles={customStyles}
                                isDisabled={contentLoading || loading}
                            />
                            <StyledSelect
                                value={currency}
                                onChange={(val: any) => handleCurrencyChange(val)}
                                options={currencyOptions}
                                styles={customStyles}
                                isDisabled={contentLoading || loading}
                            />
                            <StyledButton size="large" label="Back" onClick={() => navigate('/')} />
                        </StyledHorizontalScroll>
                    ) : (
                        <>
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
                        </>
                    )}
                </StyledHeaderRight>
            </StyledHeader>
            <StyledBody>
                <StyledContent>
                    <StyledSubBody>
                        {loading ? (
                            <StyledLoading>Loading</StyledLoading>
                        ) : (
                            <Table data={data} contentLoading={contentLoading} currency={currency} />
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
