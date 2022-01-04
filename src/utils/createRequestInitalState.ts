import { RequestIdsParams, requestsIds } from "src/redux/reducers/requests";

type StateParams = {
  isPending: boolean;
  hadError: boolean;
  responseData: Record<string, any>;
  error: Record<string, any>;
};
function createRequestInititalState(requestIds: RequestIdsParams | {} = {}) {
  const initalState: { [k in keyof RequestIdsParams]?: StateParams } = {};
  Object.values(requestIds).forEach((requestIds) => {
    initalState[requestIds] = {
      isPending: false,
      hadError: false,
      responseData: {},
      error: {},
    };
  });
  return initalState;
}

export default createRequestInititalState;
