import MovieCard from '../MovieCard/MovieCard';
import { Pagination, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function MoviesListUi({ movies, totalPages, page, setPage }) {
  return (
    <>
      <Stack direction="row" justifyContent="center" flexWrap="wrap">
        {movies.map(movie => (
          <MovieCard key={movie.kinopoiskId} movie={movie} />
        ))}
      </Stack>
      <Stack alignItems="center">
        <Pagination
          size="large"
          count={totalPages}
          variant="outlined"
          color="primary"
          page={page}
          onChange={(e, newPage) => setPage(newPage)}
        />
      </Stack>
    </>
  );
}
