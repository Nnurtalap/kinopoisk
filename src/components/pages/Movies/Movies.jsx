import useMoviesQuery from '../../../hooks/useMoviesQuery';
import ErrorMessage from '../../ui/ErrorMessage/errorMessage';
import MovieSkeleton from './Skeleton';
import AcroolCarousel, { AcroolSlideImage } from '@acrool/react-carousel';
import { Stack, Typography } from '@mui/material';
import { Link } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function Movies() {
  const {
    isLoading,
    hasError,
    responsePopular,
    responseBest,
    responsefilms,
    responseSerials,
    responseCartoon,
  } = useMoviesQuery();

  if (isLoading) return <MovieSkeleton />;
  if (hasError) return <ErrorMessage />;

  const serializeDataForCarousel = data =>
    data.map(row => (
      <RouterLink key={row.kinopoiskId} to={`/movie/${row.kinopoiskId}`}>
        <AcroolSlideImage imageUrl={row.posterUrlPreview} />
      </RouterLink>
    ));

  const caroselArr = [
    {
      title: 'Популярные фильмы',
      url: '/popular',
      data: serializeDataForCarousel(responsePopular.data.items),
    },
    {
      title: '250 лучших фильмов',
      url: '/best',
      data: serializeDataForCarousel(responseBest.data.items),
    },
    {
      title: 'Фильмы',
      url: '/films',
      data: serializeDataForCarousel(responsefilms.data.items),
    },
    {
      title: 'Сериалы',
      url: '/serials',
      data: serializeDataForCarousel(responseSerials.data.items),
    },
    {
      title: 'Мульфильмы',
      url: '/cartoons',
      data: serializeDataForCarousel(responseCartoon.data.items),
    },
  ];

  return (
    <>
      {caroselArr.map(item => (
        <Stack key={item.title}>
          <Link
            sx={{ mt: 2, mb: 2 }}
            variant="h5"
            component={RouterLink}
            to={item.url}
          >
            {item.title}
          </Link>
          <AcroolCarousel
            data={item.data}
            isEnableNavButton
            slidesPerView={1}
            slidesPerGroup={4}
            isEnableLoop
            breakpoints={{
              768: {
                slidesPerView: 5,
              },
            }}
          />
        </Stack>
      ))}
    </>
  );
}
