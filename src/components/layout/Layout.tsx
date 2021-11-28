import React from "react";
import Header from "../header/Header";
import Container from "./Container";

type LayoutProps = {};

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <>
      <Header />
      <Container>aaaa</Container>
    </>
  );
};
