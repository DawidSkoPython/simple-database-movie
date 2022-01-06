import styled from "styled-components";

const MovieWrapper = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2em;
  width: calc(50% - 1em);
  /* display: flex; */

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export default MovieWrapper;
