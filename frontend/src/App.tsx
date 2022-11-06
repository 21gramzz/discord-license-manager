import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { ToggleThemeProvider } from './contexts/ToggleThemeContext';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from './contexts/ModalContext';
import { ApolloProvider } from '@apollo/client';
import { useTheme } from './hooks/useTheme';
import client from './apollo/client';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleThemeProvider toggleTheme={toggleTheme}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <ApolloProvider client={client}>
            <GlobalStyle />
          </ApolloProvider>
        </ModalProvider>
      </ThemeProvider>
    </ToggleThemeProvider>
  );
};

export default App;
