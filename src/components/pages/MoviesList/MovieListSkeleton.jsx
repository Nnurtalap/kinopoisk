import { Box, Skeleton, Stack, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default function MovieListSkeleton() {
  return (
    <>
      <Skeleton
        animation="wave"
        variant="rectangular"
        height="32px"
        width="425px"
        sx={{ mt: 2, ml: 5 }}
      />

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
