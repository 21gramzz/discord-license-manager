import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../src/styles/theme';
import { GlobalStyle } from '../src/styles/GlobalStyles';
import { addDecorator } from '@storybook/react';
import { ModalProvider } from '../src/contexts/ModalContext';

addDecorator((Story) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <ModalProvider>
        <GlobalStyle />
        <Story />
      </ModalProvider>
    </ThemeProvider>
  );
});
