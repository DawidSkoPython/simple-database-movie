import { Theme, ThemesProps } from "src/themes/Themes";
import styled from "styled-components";

type PageNumberProps = {
  isActive: boolean;
} & any;

const PageNumber = styled.span<PageNumberProps>`
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.primary : "none"};

  &:hover {
    background-color: ${(props) =>
      props.isActive
        ? props.theme.colors.primary
        : props.theme.colors.paginationHover};
  }
`;

export default PageNumber;
