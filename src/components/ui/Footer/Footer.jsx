import { Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Stack
      component="footer"
      sx={{
        paddingBottom: 4,
        paddingTop: 4,
        flexDirection: { sm: 'row' },
        justifyContent: { sm: 'space-between' },
        alignItems: { sm: 'center' },
        marginTop: 'auto',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} &laquo;Netflix&raquo;18+ <br />
        Данный сайт создан исключительно в обущающих целях. <br />
        Все права принадлежат правообладателям.
      </Typography>
      <Typography
        component={Link}
        to="/"
        variant="h5"
        color="primary.main"
        sx={{
          textDecoration: 'none',
        }}
      >
        Netflix
      </Typography>
    </Stack>
  );
}
