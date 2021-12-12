import styled from "styled-components";

// used for styling
const HeaderStyled = styled.div`
  width: 100%;
  height: 6em;
  background-color: #07090f;
  color: #f5ede7;
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    height: 4em;
  }
`;

export default HeaderStyled;
