import React from "react";
import Header from "../header/Header";
import Container from "./Container";

type LayoutProps = {};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />

      <Container>{children}</Container>
    </>
  );
};
