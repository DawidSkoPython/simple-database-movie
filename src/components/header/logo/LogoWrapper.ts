import styled from "styled-components";
import { LogoProps } from "./Logo";

const LogoWrapper = styled.span<LogoProps>`
  font-family: "Bebas Neue", serif;
  font-style: normal;
  font-weight: 500;
  color: ${(props: LogoProps) =>
    props.isDarkTheme && props.isMenuOpen ? "#000" : "#FFF"};
  font-size: 2em;
  display: inline-block;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: ${(props: any) => props.theme.colors.primary};
  }
`;

export default LogoWrapper;
