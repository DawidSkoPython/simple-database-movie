import React from "react";
import HeaderWrapper from "./HeaderWrapper";
import Logo from "./Logo";

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <HeaderWrapper>
      <Logo>Popcorn Movies</Logo>
    </HeaderWrapper>
  );
};

export default Header;
