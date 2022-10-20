/* eslint-disable consistent-return */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface FetchCurrencies {
    currencyLowerCase: string;
    orderType: string;
    itemsPerPage: number;
    page: number;
}

export const fetchAllCurrencies = createAsyncThunk(
    'dashboard/data',
    async ({ currencyLowerCase, orderType, itemsPerPage, page }: FetchCurrencies) => {
        const { data, status } = await axios.get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency',
            {
                params: { vs_currency: currencyLowerCase, orderType, itemsPerPage, page }
            }
        );

        if ([200].includes(status)) {
            return data;
        }
    }
);
