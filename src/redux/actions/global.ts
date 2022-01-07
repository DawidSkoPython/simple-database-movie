import { GLOBAL_THEME_CHANGE } from "../actionTypes/global";
import { ActionGlobal } from "../reducers/global";

export const globalThemeChange = (theme: "light" | "dark"): ActionGlobal => ({
  type: GLOBAL_THEME_CHANGE,
  theme,
});
