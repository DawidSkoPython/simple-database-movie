import {
  DiscoverSetMoviesParams,
  DiscoverSetOptionsParams,
  DiscoverSetPaginationParams,
  Options,
} from "../actions/discover";
import {
  DISCOVER_SET_MOVIES,
  DISCOVER_SET_OPTIONS,
  DISCOVER_SET_PAGINATION,
} from "../actionTypes/dicover";

export const initialState = {
  movies: null,
  options: {
    year: "",
    sort: "popularity.desc",
    genres: "",
  },
  pagination: {
    current: 1,
    total: 0,
  },
};

export type InitalStateParams = {
  movies: any[] | null | string;
  options: Options;
  pagination: any;
};
const discoverReducer = (
  state: InitalStateParams = initialState,
  action:
    | DiscoverSetMoviesParams
    | DiscoverSetOptionsParams
    | DiscoverSetPaginationParams
) => {
  switch (action.type) {
    case DISCOVER_SET_OPTIONS: {
      console.log("OPTIONS: ", action);
      const { options } = action as DiscoverSetOptionsParams;
      let newState = { ...state };
      newState.options = { ...newState.options, ...options };
      console.log("NEW STATE: ", newState);
      return newState;
    }
    case DISCOVER_SET_MOVIES: {
      const { movies } = action;
      const newState = { ...state };
      newState.movies = movies;
      return newState;
    }

    case DISCOVER_SET_PAGINATION: {
      const { pagination } = action;
      const newState = { ...state };
      newState.pagination = { ...newState.pagination, ...pagination };

      return newState;
    }
    default:
      return state;
  }
};

export default discoverReducer;
