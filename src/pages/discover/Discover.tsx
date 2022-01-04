import React, { useEffect, useReducer, useRef } from "react";
import MovieList from "src/components/movieList/MovieList";
import Heading from "../../common/themeToggle/Heading";
import FilterForm from "../../components/filterForm/FilterForm";
import DiscoverWrapper from "./DiscoverWrapper";

import { useSelector, useDispatch } from "react-redux";
import { increment } from "src/redux/actions/index";
import requestReducer, { requestsIds } from "src/redux/reducers/requests";
import { REQUEST_IS_PENDING } from "src/redux/actionTypes/requests";
import { requestApi, requestError } from "src/redux/actions/requests";
import jsonToModel from "src/utils/jsonToModel";
import { discoverSetMovies } from "src/redux/actions/discover";

import { useSelector as useReduxSelector, TypedUseSelectorHook } from "react-redux";
import allReducers, { RootState } from "src/redux/reducers";
import moviesListModel from "src/models/movieList";

export const Discover = () => {
  // const [state, dispatch] = useSelector();
  // const { options, pagination, movies } = state.discover;

  const { movies } = useSelector((state: RootState) => state.discoverReducer);
  const { year, sort, genres } = useSelector((state: RootState) => state.discoverReducer).options;
  const isMounted = useRef<boolean>(false);
  const counter = useSelector((state: any) => state.requestsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("MOVIES: ", movies, year, sort, genres);
    if (isMounted.current || !movies) {
      dispatch(
        requestApi(
          requestsIds.discover,
          {
            endpoint: "/discover/movie",
            queryParameters: {
              primary_release_year: year,
              sorty_by: sort,
              page: 1,
              with_genres: genres,
            },
          },
          (rawData: any) => {
            const { errors } = rawData;

            if (errors) {
              return dispatch(requestError(requestsIds.discover, errors));
            }

            try {
              const { movies: newMovies, totalPages } = jsonToModel(rawData, moviesListModel);

              return dispatch(discoverSetMovies(rawData));
            } catch (e) {
              // console.log("SOMETHING IS WRONG?");
              return "xddd";
            }
          }
        )
      );
    }
  }, []);
  return (
    <DiscoverWrapper id="discoverWrapper">
      <Heading>Dicover movies {counter}</Heading>
      <FilterForm />
      {/* <MovieList /> */}
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>DODAJ</button>
    </DiscoverWrapper>
  );
};
