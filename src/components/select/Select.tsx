import styled from "styled-components";

import React from "react";
import SelectWrapper from "./SelectWrapper";
import Label from "./Label";
import SelectStyled from "./SelectStyled";
export type OptionSchema = {
  id: string | number;
  value: string;
  text: string;
};

type SelectProps = {
  label: string;
  options: OptionSchema[];
  onChange: (value: string) => void;
} & React.ComponentPropsWithoutRef<"select">;

export const Select: React.FC<SelectProps> = ({ label, options, onChange }) => {
  return (
    <SelectWrapper>
      <Label>{label}</Label>
      <SelectStyled onChange={onChange}>
        {options.map((option: OptionSchema) => (
          <option value={option.value} key={option.id}>
            {option.text}
          </option>
        ))}
      </SelectStyled>
    </SelectWrapper>
  );
};

export default Select;
