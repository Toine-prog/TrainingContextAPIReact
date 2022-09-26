import { useState } from 'react';

export const useDarkMode = (state) => {
  const [darkMode, setMode] = useState(false);

  const changeMode = () => {
    setMode(!darkMode);
  }

  return {darkMode, changeMode}
}
