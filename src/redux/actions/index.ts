import { REQUEST_IS_PENDING } from "../actionTypes/requests";
import { ActionParams } from "../reducers/requests";

export const increment = (): ActionParams => {
  return {
    id: "details",
    type: REQUEST_IS_PENDING,
    responseData: null,
  };
};

export default increment;
