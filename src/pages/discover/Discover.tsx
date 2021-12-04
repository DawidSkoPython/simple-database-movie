import React from "react";
import Heading from "../../common/themeToggle/Heading";
import FilterForm from "../../components/filterForm/FilterForm";
import DiscoverWrapper from "./DiscoverWrapper";

export const Discover = () => {
  return (
    <DiscoverWrapper id="discoverWrapper">
      <Heading>Dicover movies</Heading>
      <FilterForm />
    </DiscoverWrapper>
  );
};
