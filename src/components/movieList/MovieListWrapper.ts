import styled from "styled-components";

const MovieListWrapper = styled.div`
  box-sizing: border-box;
  margin-bottom: 2em;
  margin-top: 2em;
  display: flex;
  flex-wrap: wrap;

  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export default MovieListWrapper;
