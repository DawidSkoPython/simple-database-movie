import React from "react";
import HeaderWrapper from "./HeaderWrapper";

import PopcornIconSvg from "src/themes/icons/popcorn.svg";
// import PopcornIcon from "src/components/header/PopcornIcon";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsToggleOn } from "react-icons/bs";

import LogoWrapper from "./LogoWrapper";
import PopcornIcon from "./PopcornIcon";
import HeaderStyled from "./HeaderStyled";
import Logo from "./logo/Logo";

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = ({}) => {
  const isMobile = window.innerHeight <= 576;
  return (
    <HeaderStyled id="header">
      <HeaderWrapper>
        {isMobile ? (
          <>
            <GiHamburgerMenu />
            {/* <LogoWrapper> */}
            {/* <Logo id="logo"> */}
            {/* <PopcornIcon src={PopcornIconSvg} /> */}
            {/* <div>Popcorn Movies</div> */}
            <Logo />
            {/* </LogoWrapper> */}

            <BsToggleOn />
          </>
        ) : (
          <>
            <GiHamburgerMenu />
            {/* <LogoWrapper> */}
            {/* <Logo id="logo"> */}
            {/* <PopcornIcon src={PopcornIconSvg} /> */}
            {/* <div>Popcorn Movies</div> */}
            <Logo />
            {/* </LogoWrapper> */}

            <BsToggleOn />
          </>
        )}
      </HeaderWrapper>
    </HeaderStyled>
  );
};

export default Header;
