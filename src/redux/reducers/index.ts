import getMoviesReducer from "../../reducers/getMovies";
import loggedReducer from "../../reducers/isLogged";

import { combineReducers } from "redux";
import requestReducer from "./requests";
import discoverReducer from "./discover";
import globalReducer from "./global";

export type RootState = ReturnType<typeof allReducers>;

const allReducers = combineReducers({
  requestReducer,
  discoverReducer,
  globalReducer,
});

export default allReducers;
