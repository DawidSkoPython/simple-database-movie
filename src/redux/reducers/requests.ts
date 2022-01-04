import createRequestInititalState from "src/utils/createRequestInitalState";
import { REQUEST_CLEAR, REQUEST_ERROR, REQUEST_IS_PENDING, REQUEST_SUCCESS } from "../actionTypes/requests";

export type RequestIdsParams = {
  details: "details";
  credits: "credits";
  discover: "discover";
  search: "search";
};

export const requestsIds = {
  details: "details",
  credits: "credits",
  discover: "discover",
  search: "search",
};

export type ActionParams = { id: keyof RequestIdsParams; responseData?: any; type?: string };
export const initialState = createRequestInititalState(requestsIds);

const requestReducer = (state: any = initialState, action: ActionParams) => {
  console.log("here?", state, action);
  switch (action.type) {
    case REQUEST_IS_PENDING: {
      const { id } = action;
      const newState = { ...state };
      newState[id]!.hadError = false;
      newState[id]!.isPending = true;
      newState[id]!.responseData = {};
      return newState;
    }
    case REQUEST_SUCCESS: {
      const { id, responseData } = action;
      const newState = { ...state };
      newState[id]!.responseData = responseData;
      newState[id]!.isPending = false;
      return newState;
    }
    case REQUEST_ERROR: {
      return state;
    }
    case REQUEST_CLEAR: {
      return state;
    }
    default:
      return state;
  }
};

export default requestReducer;
