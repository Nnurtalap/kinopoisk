import { resetQuery, selectQuery } from '../../../feturies/curerntQuerySlice';
import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useDispatch } from 'react-redux';

export default function SelectMovies({
  countriesList,
  genresList,
  countries,
  order,
  year,
  genres,
}) {
  const ordersList = [
    {
      title: 'По рейтингу',
      value: 'RATING',
    },
    {
      title: 'По оценкам',
      value: 'NUM_VOTE',
    },
  ];

  const dispatch = useDispatch();

  const orderList = new Array(60).fill(null).map((_, index) => ({
    title: new Date().getFullYear() - index,
    value: new Date().getFullYear() - index,
  }));

  return (
    <Stack
      sx={{ flexDirection: { sm: 'column', md: 'row' }, gap: 1, mt: 2, mb: 2 }}
    >
      <FormControl fullWidth size="small">
        <InputLabel>Сортировка</InputLabel>
        <Select
          value={order}
          onChange={e => dispatch(selectQuery({ order: e.target.value }))}
        >
          {ordersList.map(order => (
            <MenuItem key={order.value} value={order.value}>
              {order.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Страна</InputLabel>
        <Select
          value={countries}
          onChange={e => dispatch(selectQuery({ countries: e.target.value }))}
        >
          {countriesList.map(item => (
            <MenuItem key={item.id} value={item.id}>
              {item.country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Жанр</InputLabel>
        <Select
          value={genres}
          onChange={e => dispatch(selectQuery({ genres: e.target.value }))}
        >
          {genresList.map(item => (
            <MenuItem key={item.id} value={item.id}>
              {item.genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Год</InputLabel>
        <Select
          value={year}
          onChange={e => dispatch(selectQuery({ year: e.target.value }))}
        >
          {orderList.map(item => (
            <MenuItem key={item.value} value={item.value}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box>
        <Button
          onClick={() => dispatch(resetQuery())}
          variant="outlined"
          startIcon={<CloseIcon />}
        >
          Сбросить
        </Button>
      </Box>
    </Stack>
  );
}
