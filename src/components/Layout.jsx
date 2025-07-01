import Footer from './ui/Footer';
import Navbar from './ui/Navbar';
import { Box, Container, Stack } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Container
      fixed
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box sx={{ p: 4 }} />
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  );
}
