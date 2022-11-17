import React from 'react';
import { GlobalStyle } from '../styles/GlobalStyles';
import { ToggleThemeProvider } from '../contexts/ToggleThemeContext';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from '../contexts/ModalContext';
import { ToastProvider } from '../contexts/ToastContext';
import { ApolloProvider } from '@apollo/client';
import { useTheme } from '../hooks/useTheme';
import { BrowserRouter } from 'react-router-dom';
import client from '../apollo/client';

export interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ApolloProvider client={client}>
      <ToggleThemeProvider toggleTheme={toggleTheme}>
        <ThemeProvider theme={theme}>
          <ToastProvider>
            <ModalProvider>
              <BrowserRouter>
                <GlobalStyle />
                {children}
              </BrowserRouter>
            </ModalProvider>
          </ToastProvider>
        </ThemeProvider>
      </ToggleThemeProvider>
    </ApolloProvider>
  );
};
