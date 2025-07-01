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
  reducers: {},
});

export default curerntQuerySlice.reducer;
