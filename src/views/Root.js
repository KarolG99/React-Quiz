import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme";
import { GlobalStyle } from "../assets/styles/GlobalStyle";
import { Wrapper } from "./Root.styles";
import CybersecurityQuiz from "../components/organisms/CybersecurityQuiz/CybersecurityQuiz";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import HomePage from "../components/organisms/HomePage/HomePage";
import TrafficRegulationQuiz from "../components/organisms/CookingQuiz/CookingQuiz";

function Root() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper as="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/cyberbezpieczenstwoquiz"
              element={<CybersecurityQuiz />}
            />
            <Route path="/cookingquiz" element={<TrafficRegulationQuiz />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Root;
