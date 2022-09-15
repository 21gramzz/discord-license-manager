import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { ToggleThemeProvider } from './contexts/ToggleThemeContext';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/useTheme';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleThemeProvider toggleTheme={toggleTheme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>
    </ToggleThemeProvider>
  );
};

export default App;
