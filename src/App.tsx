import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout />
    </BrowserRouter>
  );
}

export default App;
