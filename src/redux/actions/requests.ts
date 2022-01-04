import requestTheMovieDbApi from "src/utils/requestTheMovieDbApi";
import { REQUEST_ERROR, REQUEST_IS_PENDING, REQUEST_SUCCESS } from "../actionTypes/requests";

export type RequestParams = {
  endpoint: string;
  queryParameters: {
    primary_release_year: string;
    sorty_by: string;
    page: number;
    with_genres: string;
  };
};

export const requestIsPending = (id: string) => ({
  type: REQUEST_IS_PENDING,
  id,
});

export const requestError = (id: string, error: any) => ({
  type: REQUEST_ERROR,
  id,
  error,
});

export const requestSuccess = (id: string, responseData: any) => ({
  type: REQUEST_SUCCESS,
  id,
  responseData,
});

// id - discover
export const requestApi =
  (id: string, request: RequestParams, afterSuccess = (response: any) => ({})) =>
  async (dispatch: (something: Record<string, any>) => void) => {
    console.log("am i hereee?123", id);

    try {
      requestIsPending(id);
      const response = await requestTheMovieDbApi(request);
      if (!response.ok) {
        return dispatch(requestError(id, response.json).error);
      }
      const parsedResponse = await response.json();
      dispatch(requestSuccess(id, parsedResponse));
      return afterSuccess(parsedResponse);
      // dispatch()
    } catch (error) {
      return dispatch(requestError(id, error));
    }
  };
