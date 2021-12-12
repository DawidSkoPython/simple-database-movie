import React from "react";
import Select, { OptionSchema } from "../select/Select";
import FilterFormWrapper from "./FilterFormWrapper";
import genreOptions from "./genreOptions";
import sortOptions from "./sortOptions";
import yearOptions from "./yearOptions";

export const FilterForm = () => {
  return (
    <FilterFormWrapper>
      <Select options={sortOptions} label="Sorty by" onChange={() => ({})} />
      <Select options={yearOptions} label="Year" onChange={() => ({})} />
      <Select options={genreOptions} label="Genre" onChange={() => ({})} />
    </FilterFormWrapper>
  );
};

export default FilterForm;
