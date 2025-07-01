import {
  useGetFilmQuery,
  useGetFilmsQuery,
  useGetSiuqvelQuery,
  useGetStaffQuery,
} from '../../../services/kinopoiskApi';
import ErrorMessage from '../../ui/ErrorMessage/errorMessage';
import MovieCard from '../../ui/MovieCard/MovieCard';
import VideoPlayer from '../../ui/VideoPlayer/VideoPlayer';
import { ArrowBack, Language } from '@mui/icons-material';
import MovieIcon from '@mui/icons-material/Movie';
import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Grid,
  Rating,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function MovieDetail() {
  const { id } = useParams();
  const Films = useGetFilmsQuery();
  const responseFilm = useGetFilmQuery(id);
  const responsefilmAfetr = useGetSiuqvelQuery(id);
  const navigate = useNavigate();

  if (responseFilm.isLoading || responsefilmAfetr.isLoading) {
    return (
      <Stack justifyContent="center" margin="auto">
        <CircularProgress size="8rem" />
      </Stack>
    );
  }
  if (responseFilm.error) {
    return <ErrorMessage />;
  }
  return (
    <>
      <Grid container mt={2} spacing={2}>
        <Grid item md={4} size={4}>
          <img
            src={responseFilm.data.posterUrl}
            alt={responseFilm.data.nameRu}
            width="100%"
          />
        </Grid>
        <Grid item md={6} size={6}>
          <Grid container>
            <Grid item size={2}>
              <Button
                startIcon={<ArrowBack />}
                onClick={() => {
                  navigate(-1);
                }}
              />
            </Grid>
            <Grid>
              <Typography alignContent="center" variant="h5" size={4}>
                {responseFilm.data.nameRu}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item size={6}>
              <Typography alignContent="center">Год</Typography>
            </Grid>
            <Grid item size={6}>
              {responseFilm.data.year}
            </Grid>
            <Grid item size={6}>
              <Typography>Страна</Typography>
            </Grid>
            <Grid item size={6}>
              {responseFilm.data.countries.map(({ country }) => (
                <Typography gutterBottom key={country}>
                  {country}
                </Typography>
              ))}
            </Grid>

            <Grid item size={6}>
              <Typography>Жанры</Typography>
            </Grid>
            <Grid item size={6}>
              {responseFilm.data.genres.map(({ genre }) => (
                <Typography gutterBottom key={genre}>
                  {genre}
                </Typography>
              ))}
            </Grid>
            <Grid item size={6}>
              <Typography>Время</Typography>
            </Grid>
            <Grid item size={6}>
              <Typography gutterBottom>
                {responseFilm.data.filmLength} мин
              </Typography>
            </Grid>
            <Grid item size={12}>
              <Typography>Описание:</Typography>
            </Grid>
            <Grid item size={12}>
              <Typography gutterBottom>
                {responseFilm.data.shortDescription
                  ? responseFilm.data.shortDescription
                  : 'Описание отсутствует'}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid itemmd={2} size={2}>
          <Typography>Рейтинг фильма</Typography>
          <Tooltip title={`${responseFilm.data.ratingKinopoisk} / 10 `}>
            <Box>
              <Rating
                name="half-rating-read"
                value={responseFilm.data.ratingKinopoisk / 2}
                precision={0.5}
                readOnly
              />
            </Box>
          </Tooltip>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          item
          size={12}
        >
          <ButtonGroup variant="contained">
            <Button
              target="_blank"
              href={responseFilm.data.webUrl}
              endIcon={<Language />}
            >
              Kinopisk
            </Button>
            <Button
              target="_blank"
              href={`https://www.imdb.com/title/${responseFilm.data.imdbId}`}
              endIcon={<MovieIcon />}
            >
              IMDB
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          size={12}
          mb={4}
        >
          <Typography variant="h5">Смотреть онлайн</Typography>
          <VideoPlayer />
        </Grid>
      </Grid>

      {responsefilmAfetr.data && responsefilmAfetr.data.length > 0 && (
        <Stack>
          <Typography
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            variant="h6 "
          >
            Сиквелы и приквелы
          </Typography>

          <Stack
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            {responsefilmAfetr.data.map(movie => {
              const matchedFilm = Films.data?.items?.find(
                f => f.kinopoiskId === movie.filmId,
              );

              const movieWithRating = {
                ...movie,
                ratingKinopoisk: matchedFilm?.ratingKinopoisk ?? null,
                posterUrlPreview:
                  matchedFilm?.posterUrlPreview ?? movie.posterUrl,
                nameRu: movie.nameRu ?? matchedFilm?.nameRu,
              };

              return (
                <MovieCard key={movie.filmId} movie={movieWithRating} reload />
              );
            })}
          </Stack>
        </Stack>
      )}
    </>
  );
}
