import styled from "styled-components";

const Heading = styled.div`
  /* font-size: 2rem; */
  /* display: flex; */
  /* margin: 3% 0 3% 0; */
  font-size: 2em;
  margin-top: 1em;

  @media (max-width: 576px) {
    display: flex;
    justify-content: start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

export default Heading;
