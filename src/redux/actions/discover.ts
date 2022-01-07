import {
  DISCOVER_SET_MOVIES,
  DISCOVER_SET_OPTIONS,
  DISCOVER_SET_PAGINATION,
} from "../actionTypes/dicover";

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

export type DiscoverSetPaginationParams = {
  type: typeof DISCOVER_SET_PAGINATION;
  pagination: any;
};

export const discoverSetMovies = (movies: any): DiscoverSetMoviesParams => ({
  type: DISCOVER_SET_MOVIES,
  movies,
});

export const discoverSetOptions = (
  options: Options
): DiscoverSetOptionsParams => ({
  type: DISCOVER_SET_OPTIONS,
  options,
});

export const discoverSetPagination = (
  pagination: any
): DiscoverSetPaginationParams => ({
  type: DISCOVER_SET_PAGINATION,
  pagination,
});
