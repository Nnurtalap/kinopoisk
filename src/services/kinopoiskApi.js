// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
const kinopoiskApiKey = import.meta.env.VITE_KINOPISK_KEY;

export const konopoiskApi = createApi({
  reducerPath: 'konopoiskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech/api',
    prepareHeaders: headers => {
      headers.set('X-API-KEY', kinopoiskApiKey);
      headers.set('Content-Type', 'application/json');
    },
  }),
  endpoints: builder => ({
    getFilmsTop: builder.query({
      query: ({ type, page }) =>
        `v2.2/films/collections?type=${type}&page=${page}`,
    }),

    getFilms: builder.query({
      query: ({
        countries,
        genreId,
        order = 'NUM_VOTE',
        type = 'FILM',
        year,
        page,
      }) =>
        `/v2.2/films?countries${countries}&genres=${genreId}&order=${order}&type=${type}&yearFrom=${year}&yearTo=${year}&page=${page}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFilmsTopQuery, useGetFilmsQuery } = konopoiskApi;
