import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { ToggleThemeProvider } from './contexts/ToggleThemeContext';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from './contexts/ModalContext';
import { useTheme } from './hooks/useTheme';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleThemeProvider toggleTheme={toggleTheme}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <GlobalStyle />
        </ModalProvider>
      </ThemeProvider>
    </ToggleThemeProvider>
  );
};

export default App;
