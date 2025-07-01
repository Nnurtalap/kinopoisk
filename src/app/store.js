import curerntQueryReducer from '../feturies/curerntQuerySlice';
import searchQueryReducer from '../feturies/searchQuerySlice';
import { konopoiskApi } from '../services/kinopoiskApi';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [konopoiskApi.reducerPath]: konopoiskApi.reducer,
    curerntQuerySlice: curerntQueryReducer,
    searchQuerySlice: searchQueryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(konopoiskApi.middleware),
});
