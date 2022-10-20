import { createSlice } from '@reduxjs/toolkit';

import { fetchAllCurrencies } from '../thunks/dataThunk';

interface dataState {
    coinList: any;
    isLoadingData: boolean;
}

const initialState: dataState = {
    coinList: [],
    isLoadingData: false
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllCurrencies.pending, (state) => {
            state.isLoadingData = true;
        });
        builder.addCase(fetchAllCurrencies.rejected, (state) => {
            state.isLoadingData = false;
        });
        builder.addCase(fetchAllCurrencies.fulfilled, (state, action) => {
            state.isLoadingData = false;
            state.coinList = action.payload;
        });
    }
});

// eslint-disable-next-line no-empty-pattern
export const {} = dataSlice.actions;

export default dataSlice.reducer;
