import { combineReducers } from '@reduxjs/toolkit';

import dataReducer from './slices/dataSlice';

export const reducers = combineReducers({
    data: dataReducer
});
