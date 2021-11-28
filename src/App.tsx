import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/header/Header";
import { Discover } from "./pages/discover/Discover";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Discover />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
