import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { reducers } from './reducer';

export const store = configureStore({
    reducer: reducers
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
