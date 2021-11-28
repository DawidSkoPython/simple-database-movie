import React from "react";
import HeaderWrapper from "./HeaderWrapper";

import PopcornIconSvg from "src/themes/icons/popcorn.svg";
import PopcornIcon from "src/components/header/PopcornIcon";
import { ReactSVG } from "react-svg";
import Logo from "./Logo";
import LogoWrapper from "./LogoWrapper";

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo id="logo">
          <PopcornIcon src={PopcornIconSvg} />
          Popcorn Movies
        </Logo>
      </LogoWrapper>
    </HeaderWrapper>
  );
};

export default Header;
