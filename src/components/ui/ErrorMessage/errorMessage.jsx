import ErrorIcon from '@mui/icons-material/Error';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

export default function ErrorMessage() {
  return (
    <Stack margin="auto" textAlign="center">
      <Box textAlign="center">
        <ErrorIcon />
      </Box>

      <Typography>Произошла ошибка - попробуйте обновить страницу</Typography>
    </Stack>
  );
}
