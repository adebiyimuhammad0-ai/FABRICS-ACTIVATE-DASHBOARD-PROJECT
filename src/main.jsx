import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import App from "./App";
import "./beautify.css"

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#2b8cff" },
    secondary: { main: "#ff6b6b" },
  },
  typography: {
    fontFamily: "'Inter', Roboto, Helvetica, Arial, sans-serif",
    button: { textTransform: "none" }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12
        }
      }
    }
  }
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);