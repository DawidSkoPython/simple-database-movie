import { DISCOVER_SET_MOVIES } from "../actionTypes/dicover";

export const dicoverSetMovies = (movies: any) => ({
  type: DISCOVER_SET_MOVIES,
  movies,
});
