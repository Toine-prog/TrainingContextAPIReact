import { useState } from 'react';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
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
