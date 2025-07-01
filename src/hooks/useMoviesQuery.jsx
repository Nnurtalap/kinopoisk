import { TOP_LISTS } from '../constans';
import {
  useGetFilmsQuery,
  useGetFilmsTopQuery,
} from '../services/kinopoiskApi';
import { useSelector } from 'react-redux';

export default function useMoviesQuery() {
  const { countries, order, year, page } = useSelector(
    state => state.curerntQuerySlice,
  );

  const responsePopular = useGetFilmsTopQuery({
    type: TOP_LISTS[0].value,
    page,
  });
  const responseBest = useGetFilmsTopQuery({
    type: TOP_LISTS[1].value,
    page,
  });
  const responsefilms = useGetFilmsQuery({
    type: 'FILM',
    countries,
    genreId: '1',
    order,
    year,
    page,
  });
  const responseSerials = useGetFilmsQuery({
    type: 'TV_SERIES',
    countries,
    genreId: '1',
    order,
    year,
    page,
  });
  const responseCartoon = useGetFilmsQuery({
    type: 'FILM',
    countries,
    genreId: '18',
    order,
    year,
    page,
  });

  const isLoading =
    responsePopular.isFetching ||
    responseBest.isFetching ||
    responsefilms.isFetching ||
    responseSerials.isFetching ||
    responseCartoon.isFetching;
  const hasError =
    responsePopular.error ||
    responseBest.error ||
    responsefilms.error ||
    responseSerials.error ||
    responseCartoon.error;

  return {
    isLoading,
    hasError,
    responsePopular,
    responseBest,
    responsefilms,
    responseSerials,
    responseCartoon,
  };
}
