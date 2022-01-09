import styled from "styled-components";

const ContentWrapper = styled.div`
  font-size: 1em;
  height: 278px;
  width: 100%;
  position: relative;
  padding: 10px 15px 16px;

  @media (max-width: 576px) {
    flex: 100%;
    max-width: 100%;
  }
`;

export default ContentWrapper;
