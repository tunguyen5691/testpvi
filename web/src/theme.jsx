import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    base: "#2C2C2C",
    primary: "#1B57C4",
    secondary: "#113D6B",
    placeholder: "#839AB2",
    error: "#FF0000",
    border: "#E0E0E0",
    yellow: "#FFD422",
    gradient: "linear-gradient(224.13deg, #19B9FB 14.13%, #1C99F7 47.89%, #1F79F3 85.36%)"
  },
  borderRadius: {
    xlg: "20px",
    lg: "16px",
    md: "12px",
    sm: "6px"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;