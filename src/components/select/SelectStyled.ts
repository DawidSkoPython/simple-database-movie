import styled from "styled-components";

const SelectStyled = styled.select`
  display: inline-block;
  cursor: pointer;
  height: 2.5em;
  border-radius: 0.25rem;
  padding-left: 0.5em;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export default SelectStyled;
