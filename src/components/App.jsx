import { TOP_LISTS, MOVIE_LISTS } from '../constans';
import Layout from './Layout';
import ActorDetail from './pages/ActorDetail';
import MovieDetail from './pages/MovieDetail';
import Movies from './pages/Movies';
import MoviesList from './pages/MoviesList';
import MoviesListMain from './pages/MoviesListMain/MoviesListMain';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Movies />,
        },
        ...MOVIE_LISTS.map(item => ({
          path: item.url,
          element: <MoviesListMain />,
        })),
        ...TOP_LISTS.map(item => ({
          path: item.url,
          element: <MoviesList />,
        })),
        {
          path: '/actor/:id',
          element: <ActorDetail />,
        },
        {
          path: '/movie/:id',
          element: <MovieDetail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
