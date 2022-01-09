import styled from "styled-components";

const Container = styled.div`
  /* font-family: "Bowlby One SC", cursive; */
  font-family: Mukta;
  /* font-weight: 300; */
  /* margin: 0 var(--commonMargin) 0 var(--commonMargin); */
  margin-right: auto;
  margin-left: auto;
  /* font-size: 50px; */

  h5 {
    font-weight: 400;
  }
  @media (max-width: 576px) {
    width: 80%;
    min-height: calc(100vh - 12em);
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

export default Container;
