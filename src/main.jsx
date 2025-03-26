import "./index.css";
import Home from "./pages/Home";
import { StrictMode } from "react";
import Survey from "./pages/Survey";
import Header from "./components/Header";
import { createRoot } from "react-dom/client";
import ClientFrom from "./components/ClientForm/index";
import FreelanceForm from "./pages/FreelanceForm/FreelanceForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Result from "./components/Result/Result";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
        margin: 0
        
    }
`;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Survey/:questionNumber" element={<Survey />}>
          <Route path="client" element={<ClientFrom />} />
        </Route>
        <Route path="/Result" element={<Result />} />
        <Route path="Freelance" element={<FreelanceForm />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </StrictMode>
);
