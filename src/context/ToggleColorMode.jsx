import { createTheme, ThemeProvider } from '@mui/material';
import React, { createContext, useEffect, useState } from 'react';

export const colorModeContext = createContext();
export default function ToggleColorMode({ children }) {
  const [mode, setMode] = useState('dark');
  const theme = createTheme({ palette: { mode } });
  useEffect(() => {
    const modeFromLocalStorage = localStorage.getItem('theme');
    if (modeFromLocalStorage) {
      setMode(modeFromLocalStorage);
    } else {
      localStorage.setItem('theme', 'dark');
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);
  const toggleMode = () => {
    setMode(prevState => (prevState === 'light' ? 'dark' : 'light'));
  };
  return (
    <colorModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </colorModeContext.Provider>
  );
}
