import {
  searchQuerySlice,
  setSearchQuery,
} from '../../../feturies/searchQuerySlice';
import { useGetFilmsQuery } from '../../../services/kinopoiskApi';
import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Search() {
  const movieType = {
    FILM: 'фильм',
    TV_SERIES: 'сериал',
    TV_SHOW: 'тв шоу',
    MINI_SERIES: 'мини сериалы',
  };
  const [input, setInput] = useState('');
  const dispach = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      dispach(setSearchQuery({ keyword: input }));
    }, 500);

    return () => {
      clearTimeout(setTimeoutId);
    };
  }, [input]);
  useEffect(() => {
    if (location.pathname === '/') {
      setInput('');
    }
  }, [location.pathname]);

  const { countries, genres, order, type, year, page, keyword } = useSelector(
    state => state.searchQuerySlice,
  );

  const { data, isFetching } = useGetFilmsQuery({
    countries,
    genreId: genres,
    order,
    type,
    year,
    page,
    keyword,
  });

  return (
    <Autocomplete
      freeSolo
      sx={{
        width: 300,
        backgroundColor: 'rgba(255,255,255, 0.15)',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none',
          },
        },
      }}
      inputValue={input}
      onInputChange={(_, value) => {
        setInput(value);
      }}
      getOptionLabel={option =>
        `${option.nameRu} - ${movieType[option.type]} - ${option.year}`
      }
      options={data ? data.items : []}
      onChange={(_, value) => {
        navigate(`/movie/${value.kinopoiskId}`);
      }}
      renderInput={params => (
        <TextField
          {...params}
          label="Поиск фильма"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {isFetching ? (
                  <CircularProgress size={20} color="inherit" />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
