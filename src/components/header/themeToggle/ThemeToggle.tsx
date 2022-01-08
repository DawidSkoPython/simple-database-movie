import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { globalThemeChange } from "src/redux/actions/global";
// import ThemeToggleWrapper from "./ThemeToggleWrapper";
import Toggle from "./Toggle";
// import ToggleOff from "./ToggleOff";
// import ToggleOn from "./ToggleOn";
import ToggleThumb from "./ToggleThumb";
import ToggleTrack from "./ToggleTrack";
import ToggleTrackCheck from "./ToggleTrackCheck";
import ToggleTrackX from "./ToggleTrackX";

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
    <Toggle isMobile={isMobile} onClick={onToggle}>
      <ToggleTrack>
        <ToggleTrackCheck isChecked={isChecked}></ToggleTrackCheck>
        <ToggleTrackX isChecked={isChecked}></ToggleTrackX>
      </ToggleTrack>
      <ToggleThumb isChecked={isChecked} />
    </Toggle>
  );
};

export default ThemeToggle;
