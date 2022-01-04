import { DISCOVER_SET_MOVIES, DISCOVER_SET_OPTIONS } from "../actionTypes/dicover";

export type DiscoverSetMoviesParams = {
  type: typeof DISCOVER_SET_MOVIES;
  movies: any[];
};

export type Options = {
  year: string;
  sort: string;
  genres: string;
};

export type DiscoverSetOptionsParams = {
  type: typeof DISCOVER_SET_OPTIONS;
  options: Options;
};

export const discoverSetMovies = (movies: any): DiscoverSetMoviesParams => ({
  type: DISCOVER_SET_MOVIES,
  movies,
});

export const discoverSetOptions = (options: Options): DiscoverSetOptionsParams => ({
  type: DISCOVER_SET_OPTIONS,
  options,
});
