import getMoviesReducer from "./getMovies";
import loggedReducer from "./isLogged";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  getMoviesReducer,
  loggedReducer,
});

export default allReducers;
