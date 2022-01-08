import styled from "styled-components";

// used mainly to constrain size
const HeaderWrapper = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 576px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export default HeaderWrapper;
