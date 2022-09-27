import { useState } from 'react';

const themes = {
  light: {
    foreground: "#161616",
    background: "#fcfcfc"
  },
  dark: {
    foreground: "#E4E4E4",
    background: "#121212"
  }
};

export const useDarkMode = () => {
  const [darkMode, setMode] = useState(false);
  const [theme, setTheme] = useState(themes.dark)

  const changeMode = () => {
    setMode(!darkMode);
    darkMode ? setTheme(themes.dark) : setTheme(themes.light)
  }

  return {theme, changeMode}
}
