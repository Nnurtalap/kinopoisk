import curerntQueryReducer from '../feturies/curerntQuerySlice';
import { konopoiskApi } from '../services/kinopoiskApi';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [konopoiskApi.reducerPath]: konopoiskApi.reducer,
    curerntQuerySlice: curerntQueryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(konopoiskApi.middleware),
});
