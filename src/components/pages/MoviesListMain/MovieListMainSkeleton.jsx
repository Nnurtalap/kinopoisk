import { Box, Skeleton, Stack, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default function MovieListMainSkeleton() {
  const isMobale = useMediaQuery('(max-width:600px)');
  return (
    <>
      <Skeleton
        animation="wave"
        variant="rectangular"
        height="32px"
        width="425px"
        sx={{ mt: 2, ml: 5 }}
      />
      <Stack
        mt={2}
        mb={2}
        sx={{ flexDirection: { sm: 'column', md: 'row' }, gap: 1 }}
      >
        <Skeleton
          animation="wave"
          variant="rectangular"
          height="32px"
          width={isMobale ? '100%' : '25%'}
          sx={{ mt: 2, ml: 5 }}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          height="32px"
          width={isMobale ? '100%' : '25%'}
          sx={{ mt: 2, ml: 5 }}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          height="32px"
          width={isMobale ? '100%' : '25%'}
          sx={{ mt: 2, ml: 5 }}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          height="32px"
          width={isMobale ? '100%' : '25%'}
          sx={{ mt: 2, ml: 5 }}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          height="32px"
          width="132px"
          sx={{ mt: 2, ml: 5 }}
        />
      </Stack>

      <Stack direction="row" justifyContent="center" flexWrap="wrap">
        {new Array(15).fill(null).map((_, index) => (
          <React.Fragment key={index}>
            <Stack flexDirection="column">
              <Skeleton
                animation="wave"
                variant="rectangular"
                height="322px"
                width="215px"
                sx={{ mt: 2 }}
              />
              <Skeleton animation="wave" variant="text" width="120px" />
              <Skeleton animation="wave" variant="text" width="120px" />
            </Stack>
          </React.Fragment>
        ))}
      </Stack>
    </>
  );
}
