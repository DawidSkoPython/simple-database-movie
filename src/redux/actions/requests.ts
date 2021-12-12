import { REQUEST_ERROR, REQUEST_IS_PENDING } from "../actionTypes/requests";

export const requestIsPending = (id: string) => ({
  type: REQUEST_IS_PENDING,
  id,
});

export const requestError = (id: string, error: any) => ({
  type: REQUEST_ERROR,
  id,
  error,
});

export const requestApi =
  (id: string, request: any, afterSuccess = () => ({})) =>
  async (dispatch: (something: Record<string, any>) => void) => {
    try {
      requestIsPending(id);
      const response = await request;
      // dispatch()
    } catch (error) {
      return dispatch(requestError(id, error));
    }
  };
