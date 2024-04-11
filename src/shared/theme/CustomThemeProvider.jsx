import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./variants/darkTheme";
import { lightTheme } from "./variants/lightTheme";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const defaultTheme = lightTheme;

export default function CustomThemeProvider({ children }) {
  const [activeTheme, setActiveTheme] = useState(defaultTheme);

  const selectedTheme = useSelector((state) => state.theme.value);

  useEffect(() => {
    switch (selectedTheme) {
      case "light":
        setActiveTheme(lightTheme);
        break;
      case "dark":
        setActiveTheme(darkTheme);
        break;
      default:
        setActiveTheme(defaultTheme);
    }
  }, [selectedTheme]);

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
