import React from "react";
import ReactDOM from "react-dom/client";
import { Professionals } from "./pages/Professionals";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Professionals />
    </ThemeProvider>
  </React.StrictMode>
);
