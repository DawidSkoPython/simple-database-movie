import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/header/Header";
import { Discover } from "./pages/discover/Discover";
import { ThemeProvider } from "styled-components";
import Themes from "./themes/Themes";
import { RootState } from "./redux/reducers";
import { useSelector } from "react-redux";

function App() {
  const { theme } = useSelector((state: RootState) => state.globalReducer);
  console.log("what is the theme?: ", Themes[theme as "light" | "dark"]);
  return (
    <BrowserRouter>
      <ThemeProvider theme={Themes[theme as "light" | "dark"]}>
        <GlobalStyle />
        <Layout>
          <Switch>
            <Route path="/" component={Discover} />
          </Switch>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
