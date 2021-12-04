import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/header/Header";
import { Discover } from "./pages/discover/Discover";
import { ThemeProvider } from "styled-components";
import Themes from "./themes/Themes";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Themes}>
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
