import React from "react";
import Select, { OptionSchema } from "../select/Select";
import FilterFormWrapper from "./FilterFormWrapper";
import genreOptions from "./genreOptions";
import sortOptions from "./sortOptions";
import yearOptions from "./yearOptions";

export type FilterFormProps = {
  onGenreChange: (value: string) => void;
  onSortChange: (value: string) => void;
  onYearChange: (value: string) => void;
};

export const FilterForm: React.FC<FilterFormProps> = ({
  onGenreChange,
  onSortChange,
  onYearChange,
}) => {
  return (
    <FilterFormWrapper>
      <Select
        options={sortOptions}
        label="Sorty by"
        onChange={(event: any) => onSortChange(event.detail.value)}
      />
      <Select
        options={yearOptions}
        label="Year"
        onChange={(event: any) => onYearChange(event.detail.value)}
      />
      <Select
        options={genreOptions}
        label="Genre"
        onChange={(event: any) => onGenreChange(event.detail.value)}
      />
    </FilterFormWrapper>
  );
};

export default FilterForm;
