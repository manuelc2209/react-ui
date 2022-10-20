import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { reducers } from './reducer';

const isProd = process.env.NODE_ENV !== 'production';

export const store = configureStore({
    reducer: reducers,
    devTools: isProd
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
