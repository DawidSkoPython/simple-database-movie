import getMoviesReducer from "../../reducers/getMovies";
import loggedReducer from "../../reducers/isLogged";

import { combineReducers } from "redux";
import requestReducer from "./requests";
import discoverReducer from "./discover";

export type RootState = ReturnType<typeof allReducers>;

const allReducers = combineReducers({
  requestReducer,
  discoverReducer,
});

export default allReducers;
