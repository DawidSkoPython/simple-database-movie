import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { globalThemeChange } from "src/redux/actions/global";
import ThemeToggleWrapper from "./ThemeToggleWrapper";
import Toggle from "./Toggle";
import ToggleTrack from "./ToggleTrack";

type ThemeToggleProps = {
  isMobile: boolean;
};

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isMobile }) => {
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

  // return <ThemeToggleWrapper onClick={onToggle}></ThemeToggleWrapper>;
  return (
    <Toggle isMobile={isMobile}>
      <ToggleTrack></ToggleTrack>
    </Toggle>
  );
};

export default ThemeToggle;
