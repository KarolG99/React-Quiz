import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme";
import { GlobalStyle } from "../assets/styles/GlobalStyle";
import { Wrapper } from "./Root.styles";
import CybersecurityQuiz from "../components/organisms/CybersecurityQuiz/CybersecurityQuiz";
import HomePage from "../components/organisms/HomePage/HomePage";
import CookingQuiz from "../components/organisms/CookingQuiz/CookingQuiz";
import Metin2Quiz from "../components/organisms/Metin2Quiz/Metin2Quiz";
import AppleQuiz from "../components/organisms/AppleQuiz/AppleQuiz";

function Root() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper as="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/cyberbezpieczenstwoquiz"
              element={<CybersecurityQuiz />}
            />
            <Route path="/cookingquiz" element={<CookingQuiz />} />
            <Route path="/metin2quiz" element={<Metin2Quiz />} />
            <Route path="/applequiz" element={<AppleQuiz />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </HashRouter>
  );
}

export default Root;
