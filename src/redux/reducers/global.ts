import { GLOBAL_THEME_CHANGE } from "../actionTypes/global";

export const initialState = {
  theme: "light",
  isMobile: false,
};

export type ActionGlobal = {
  type: typeof GLOBAL_THEME_CHANGE;
  theme: "light" | "dark";
};

const globalReducer = (state = initialState, action: ActionGlobal) => {
  switch (action.type) {
    case GLOBAL_THEME_CHANGE: {
      const { theme } = action;
      return { ...state, theme };
    }
    default:
      return state;
  }
};

export default globalReducer;
