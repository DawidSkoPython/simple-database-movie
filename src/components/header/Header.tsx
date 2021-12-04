import React from "react";
import HeaderWrapper from "./HeaderWrapper";

import PopcornIconSvg from "src/themes/icons/popcorn.svg";
// import PopcornIcon from "src/components/header/PopcornIcon";

import Logo from "./Logo";
import LogoWrapper from "./LogoWrapper";
import PopcornIcon from "./PopcornIcon";
import HeaderStyled from "./HeaderStyled";

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <HeaderStyled id="header">
      <HeaderWrapper>
        <LogoWrapper>
          {/* <Logo id="logo"> */}
          {/* <PopcornIcon src={PopcornIconSvg} /> */}
          Popcorn Movies
          {/* </Logo> */}
        </LogoWrapper>
      </HeaderWrapper>
    </HeaderStyled>
  );
};

export default Header;
