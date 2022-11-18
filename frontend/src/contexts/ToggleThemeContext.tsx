import React, { createContext } from 'react';
import { DefaultTheme } from 'styled-components';
import { ColorMode } from '../hooks/useTheme';

interface Props {
  children: React.ReactNode;
  toggleTheme: () => void;
  theme: DefaultTheme;
  mode: ColorMode;
}

export interface ToggleThemeContextType {
  toggleTheme: () => void;
  theme: DefaultTheme;
  mode: ColorMode;
}

export const ToggleThemeContext = createContext({} as ToggleThemeContextType);

export const ToggleThemeProvider: React.FC<Props> = ({
  children,
  toggleTheme,
  theme,
  mode,
}) => {
  return (
    <ToggleThemeContext.Provider value={{ toggleTheme, theme, mode }}>
      {children}
    </ToggleThemeContext.Provider>
  );
};
