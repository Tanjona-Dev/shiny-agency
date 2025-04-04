import "./index.css";
import Home from "./pages/Home";
import { StrictMode } from "react";
import Survey from "./pages/Survey";
import Error from "./components/Error";
import Header from "./components/Header";
import GlobalStyle from "./utils/style/GlobalStyle";
import Footer from "./components/Footer";
import { createRoot } from "react-dom/client";
import Result from "./components/Result/Result";
import SurveyProvider from "../src/utils/context/index";
import { ThemeProvider } from "../src/utils/context/index";
import FreelanceForm from "./pages/FreelanceForm/FreelanceForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <SurveyProvider>
        <ThemeProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Survey/:questionNumber" element={<Survey />} />
            <Route path="/Result" element={<Result />} />
            <Route path="Freelance" element={<FreelanceForm />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </SurveyProvider>
    </Router>
  </StrictMode>
);
