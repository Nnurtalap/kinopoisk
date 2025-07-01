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

export default function MovieCard({ movie }) {
  return (
    <Stack>
      <RouterLink to={`/movie/${movie.konopoiskId}`}>
        <img className={styles.img} src={movie.posterUrlPreview} />
      </RouterLink>
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
        <h5 sx={{ width: '200px' }} textAlign="center">
          рейтинг отсутсвтует
        </h5>
      )}
      <Link sx={{ width: '200px' }} component={RouterLink} textAlign="center">
        {movie.nameRu ? movie.nameRu : movie.nameEng}
      </Link>
    </Stack>
  );
}
