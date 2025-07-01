import { MOVIE_LISTS } from '../../../constans';
import {
  useGetFilmsQuery,
  useGetGenresAndCountriesQuery,
} from '../../../services/kinopoiskApi';
import ErrorMessage from '../../ui/ErrorMessage/errorMessage';
import MoviesListUi from '../../ui/MoviesListUi/MoviesListUi';
import SelectMovies from '../../ui/SelectMovies/SelectMovies';
import MovieListMainSkeleton from './MovieListMainSkeleton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Pagination, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

export default function MoviesList() {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { countries, genres, order, year } = useSelector(
    state => state.curerntQuerySlice,
  );
  const moviesType = MOVIE_LISTS.find(el => el.url === location.pathname);
  const cartoon = moviesType.url === '/cartoons' ? 18 : genres;
  const responseFilms = useGetFilmsQuery({
    type: moviesType.value,
    countries,
    genreId: cartoon,
    order,
    year,
    page,
  });

  useEffect(() => {
    setPage(1);
  }, [location]);

  const responseGenresAndCountries = useGetGenresAndCountriesQuery();

  if (responseFilms.error || responseGenresAndCountries.error)
    return <ErrorMessage />;
  if (responseFilms.isLoading || responseGenresAndCountries.isLoading)
    return <MovieListMainSkeleton />;

  return (
    <>
      <Stack flexDirection="row">
        <Button onClick={() => navigate(-1)} startIcon={<ArrowBackIcon />} />
        <Typography sx={{ mt: '8px', mb: '8px' }} variant="h4">
          {moviesType.title}
        </Typography>
      </Stack>
      <SelectMovies
        countriesList={responseGenresAndCountries.data.countries}
        genresList={responseGenresAndCountries.data.genres}
        countries={countries}
        order={order}
        year={year}
        genreId={genres}
      />
      <MoviesListUi
        movies={responseFilms.data.items}
        totalPages={responseFilms.data.totalPages}
        page={page}
        setPage={setPage}
      ></MoviesListUi>
    </>
  );
}
