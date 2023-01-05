import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from '../../../redux/store';
import { fetchAllCurrencies } from '../../../redux/thunks/dataThunk';
import { useViewport, UseDebounce } from '../../../hooks';

import {
    StyledContainer,
    StyledHeader,
    StyledContentLeft,
    StyledText,
    StyledHeaderRight,
    StyledHorizontalScroll,
    StyledSelect,
    customStyles,
    StyledButton,
    StyledBody,
    StyledContent,
    StyledSubBody,
    StyledLoading,
    StyledFooter,
    StyledButtonFooter
} from './styles';
import { CurrencyType } from './shared';
import { Table } from './dataTable/Table';

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

export const DashboardUI: React.FC = () => {
    const { coinList, isLoadingData } = useSelector((state: RootState) => state.data);
    const [currency, setCurrency] = useState<CurrencyType>(currencyOptions[0]);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const [page, setPage] = useState(1);
    const [order, setOrder] = useState<SortType>(sortingOptions[0]);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { isMobileViewport } = useViewport();
    const isMobile = UseDebounce(isMobileViewport(), 300);

    const handleCurrencyChange = (selectedOption: any) => {
        if (selectedOption !== currency) {
            setCurrency(selectedOption as CurrencyType);
        }
    };

    const handleSorting = (selectedOption: any) => {
        if (selectedOption !== order) {
            setOrder(selectedOption as SortType);
        }
    };

    const handlePageChange = (addCount?: boolean) => {
        setPage(addCount ? page + 1 : page - 1);
    };

    useEffect(() => {
        if (!currency) {
            return;
        }

        dispatch(
            fetchAllCurrencies({
                currencyLowerCase: currency.value,
                orderType: order.value,
                itemsPerPage,
                page
            })
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency, page, itemsPerPage, order]);

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
                                isDisabled={isLoadingData}
                            />
                            <StyledSelect
                                value={currency}
                                onChange={(val: any) => handleCurrencyChange(val)}
                                options={currencyOptions}
                                styles={customStyles}
                                isDisabled={isLoadingData}
                            />
                            <StyledButton size="large" label="Back" onClick={() => navigate(-1)} />
                        </StyledHorizontalScroll>
                    ) : (
                        <>
                            <Select
                                value={order}
                                onChange={(val: any) => handleSorting(val)}
                                options={sortingOptions}
                                styles={customStyles}
                                isDisabled={isLoadingData}
                            />
                            <Select
                                value={currency}
                                onChange={(val: any) => handleCurrencyChange(val)}
                                options={currencyOptions}
                                styles={customStyles}
                                isDisabled={isLoadingData}
                            />
                            <StyledButton size="large" label="Back" onClick={() => navigate(-1)} />
                        </>
                    )}
                </StyledHeaderRight>
            </StyledHeader>
            <StyledBody>
                <StyledContent>
                    <StyledSubBody>
                        {isLoadingData || !coinList.length ? (
                            <StyledLoading>Loading...</StyledLoading>
                        ) : (
                            <Table data={coinList} contentLoading={isLoadingData} currency={currency} />
                        )}
                    </StyledSubBody>
                </StyledContent>
            </StyledBody>
            <StyledFooter>
                <StyledButtonFooter
                    label="Previous Page"
                    size="large"
                    onClick={() => handlePageChange()}
                    disabled={(page === 1 && !isLoadingData) || isLoadingData}
                />
                <StyledButtonFooter
                    disabled={isLoadingData}
                    label="Next Page"
                    size="large"
                    onClick={() => handlePageChange(true)}
                />
            </StyledFooter>
        </StyledContainer>
    );
};
