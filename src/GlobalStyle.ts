import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<any>`


html {
    box-sizing: border-box;
    font-family: Bebas Neue,serif;
    margin: 0;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
}
*,
*::before,
*::after {
    box-sizing: inherit;
}
`;

export default GlobalStyle;
