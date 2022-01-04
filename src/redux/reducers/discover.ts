import { DiscoverSetMoviesParams, DiscoverSetOptionsParams, Options } from "../actions/discover";
import { DISCOVER_SET_MOVIES, DISCOVER_SET_OPTIONS } from "../actionTypes/dicover";

export const initialState = {
  movies: null,
  options: {
    year: "",
    sort: "popularity.desc",
    genres: "",
  },
};

export type InitalStateParams = {
  movies: any[] | null | string;
  options: Options;
};
const discoverReducer = (state: InitalStateParams = initialState, action: DiscoverSetMoviesParams | DiscoverSetOptionsParams) => {
  switch (action.type) {
    case DISCOVER_SET_OPTIONS: {
      const { options } = action as DiscoverSetOptionsParams;
      let newState = { ...state };
      newState.options = { ...newState.options, ...options };
      return newState;
    }
    case DISCOVER_SET_MOVIES: {
      const { movies } = action;
      const newState = { ...state };
      newState.movies = movies;
      return newState;
    }
    default:
      return state;
  }
};

export default discoverReducer;
