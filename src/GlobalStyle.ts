import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


html {
    box-sizing: border-box;
    font-family: Bebas Neue,serif;
    margin: 0;
}
*,
*::before,
*::after {
    box-sizing: inherit;
}
`;

export default GlobalStyle;
