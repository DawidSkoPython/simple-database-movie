import React from "react";
import Select, { OptionSchema } from "../select/Select";
import FilterFormWrapper from "./FilterFormWrapper";
import genreOptions from "./genreOptions";
import sortOptions from "./sortOptions";
import yearOptions from "./yearOptions";

export type FilterFormProps = {
  onGenreChange: (value: any) => void;
  onSortChange: (value: any) => void;
  onYearChange: (value: any) => void;
};

export const FilterForm: React.FC<FilterFormProps> = ({
  onGenreChange,
  onSortChange,
  onYearChange,
}) => {
  return (
    <FilterFormWrapper>
      <Select options={sortOptions} label="Sorty by" onChange={onSortChange} />
      <Select options={yearOptions} label="Year" onChange={onYearChange} />
      <Select options={genreOptions} label="Genre" onChange={onGenreChange} />
    </FilterFormWrapper>
  );
};

export default FilterForm;
