import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/header/Header";
import { Discover } from "./pages/discover/Discover";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route path="/" component={Discover} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
