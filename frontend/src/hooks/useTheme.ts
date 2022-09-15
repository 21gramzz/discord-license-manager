import { useCallback, useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/theme';

type ColorMode = 'dark' | 'light';

export const useTheme = () => {
  const [mode, setMode] = useState<ColorMode>('dark');
  const [theme, setTheme] = useState<DefaultTheme>(darkTheme);

  useEffect(() => {
    const currentMode = localStorage.getItem('theme') || 'dark';
    const currentTheme = currentMode === 'light' ? lightTheme : darkTheme;
    setMode(currentMode === 'light' ? 'light' : 'dark');
    setTheme(currentTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    const newTheme = newMode === 'light' ? lightTheme : darkTheme;
    setMode(newMode === 'light' ? 'light' : 'dark');
    setTheme(newTheme);
    localStorage.setItem('theme', newMode);
  }, [mode]);

  return { theme, toggleTheme, mode };
};
