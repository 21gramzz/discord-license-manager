import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../src/styles/theme';
import { GlobalStyle } from '../src/styles/GlobalStyles';
import { addDecorator } from '@storybook/react';

addDecorator((Story) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  );
});
