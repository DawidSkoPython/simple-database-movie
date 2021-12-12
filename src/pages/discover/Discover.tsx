import React, { useEffect } from "react";
import MovieList from "src/components/movieList/MovieList";
import Heading from "../../common/themeToggle/Heading";
import FilterForm from "../../components/filterForm/FilterForm";
import DiscoverWrapper from "./DiscoverWrapper";

import { useSelector, useDispatch } from "react-redux";
import { increment } from "src/redux/actions/index";

export const Discover = () => {
  // const { options, pagination, movies } = state.discover;
  const counter = useSelector((state: any) => state.getMoviesReducer);
  const dispatch = useDispatch();

  useEffect(() => {}, []);
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
