import styled from "styled-components";

const Toggle = styled.div<{ isMobile: boolean }>`
  /* display: flex;
  ${(props) =>
    !props.isMobile
      ? `
    float: right;
    margin-top: 1.1em;
  `
      : "margin-right: 10%"};

  touch-action: pan-x;
  /* display: inline-block; */
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;
  user-select: none;

  align-items: center; */
`;

export default Toggle;
