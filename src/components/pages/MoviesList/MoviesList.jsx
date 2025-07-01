import { TOP_LISTS } from '../../../constans';
import { useGetFilmsTopQuery } from '../../../services/kinopoiskApi';
import MoviesListUi from '../../ui/MoviesListUi/MoviesListUi';
import MovieListSkeleton from './MovieListSkeleton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function MoviesList() {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const moviesType = TOP_LISTS.find(el => el.url === location.pathname);

  const { error, data, isLoading } = useGetFilmsTopQuery({
    type: moviesType.value,
    page: page,
  });

  useEffect(() => {
    setPage(1);
  }, [location]);

  if (!data) return <MovieListSkeleton />;

  return (
    <>
      <Stack flexDirection="row">
        <Button onClick={() => navigate(-1)} startIcon={<ArrowBackIcon />} />
        <Typography sx={{ mt: '8px', mb: '8px' }} variant="h4">
          {moviesType.title}
        </Typography>
      </Stack>

      <MoviesListUi
        movies={data.items}
        totalPages={data.totalPages}
        page={page}
        setPage={setPage}
      ></MoviesListUi>
    </>
  );
}
