import styles from './Moviecard.module.css';
import {
  Box,
  Rating,
  Stack,
  Tooltip,
  Typography,
  Link,
  Pagination,
} from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function MovieCard({ movie, reload = false }) {
  const linkProps = reload
    ? { component: 'a', href: `/movie/${movie.kinopoiskId}` }
    : { component: RouterLink, to: `/movie/${movie.kinopoiskId}` };

  return (
    <Stack>
      <Link {...linkProps}>
        <img
          className={styles.img}
          src={movie.posterUrlPreview}
          alt={movie.nameRu}
        />
      </Link>
      <Link
        {...linkProps}
        underline="hover"
        sx={{ textAlign: 'center', fontWeight: 500, width: '200px' }}
      >
        {movie.nameRu ? movie.nameRu : movie.nameEng}
      </Link>
      {movie.ratingKinopoisk ? (
        <Stack>
          <Tooltip title={`${movie.ratingKinopoisk} / 10 `}>
            <Box>
              <Rating
                name="half-rating-read"
                value={movie.ratingKinopoisk / 2}
                precision={0.5}
                readOnly
              />
            </Box>
          </Tooltip>
        </Stack>
      ) : (
        <Typography sx={{ width: '200px' }} textAlign="center">
          рейтинг отсутсвтует
        </Typography>
      )}
    </Stack>
  );
}
