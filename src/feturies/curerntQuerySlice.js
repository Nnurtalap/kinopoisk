import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countries: '',
  genres: '',
  order: 'NUM_VOTE',
  type: '',
  year: '',
  page: '1',
};

export const curerntQuerySlice = createSlice({
  name: 'curerntQuerySlice',
  initialState,
  reducers: {
    selectQuery: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    resetQuery: () => ({
      ...initialState,
    }),
  },
});

export const { resetQuery, selectQuery } = curerntQuerySlice.actions;
export default curerntQuerySlice.reducer;
