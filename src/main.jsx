import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./routes";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import { AuthUserProvider } from "./hooks/authUser";
import { AuthProfessionalProvider } from "./hooks/authProfessional";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthUserProvider>
        <AuthProfessionalProvider>
          <Routes />
        </AuthProfessionalProvider>
      </AuthUserProvider>
    </ThemeProvider>
  </React.StrictMode>
);
