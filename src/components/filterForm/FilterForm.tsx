import React from "react";
import Select, { OptionSchema } from "../select/Select";
import FilterFormWrapper from "./FilterFormWrapper";

let options: OptionSchema[] = [];
for (let i = 0; i < 10; i++) {
  options.push({ id: i, text: "something1", value: "sdss" });
}

export const FilterForm = () => {
  return (
    <FilterFormWrapper>
      <Select options={options} label="Sorty by" onChange={() => ({})} />
      <Select options={options} label="Year" onChange={() => ({})} />
      {/* <Select options={options} label="Genre" onChange={() => ({})} /> */}
    </FilterFormWrapper>
  );
};

export default FilterForm;
