import React from "react";
import LogoWrapper from "./LogoWrapper";

export type LogoProps = {
  isDarkTheme: boolean;
  isMenuOpen: boolean;
};

export const Logo = () => {
  return (
    <LogoWrapper isDarkTheme={false} isMenuOpen={false}>
      Popcorn movies
    </LogoWrapper>
  );
};

export default Logo;
