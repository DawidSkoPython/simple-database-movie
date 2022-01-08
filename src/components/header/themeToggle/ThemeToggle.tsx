import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { globalThemeChange } from "src/redux/actions/global";
import ThemeToggleWrapper from "./ThemeToggleWrapper";

export const ThemeToggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();
  const onToggle = () => {
    console.log("LICKED");
    setIsChecked(!isChecked);
    if (isChecked) {
      dispatch(globalThemeChange("light"));
    } else {
      dispatch(globalThemeChange("dark"));
    }
  };

  return <ThemeToggleWrapper onClick={onToggle}></ThemeToggleWrapper>;
};

export default ThemeToggle;
