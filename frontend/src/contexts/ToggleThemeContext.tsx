import React, { createContext } from 'react';

interface Props {
  children: React.ReactNode;
  toggleTheme: () => void;
}

export interface ToggleThemeContextType {
  toggleTheme: () => void;
}

export const ToggleThemeContext = createContext({} as ToggleThemeContextType);

export const ToggleThemeProvider: React.FC<Props> = ({
  children,
  toggleTheme,
}) => {
  return (
    <ToggleThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ToggleThemeContext.Provider>
  );
};
