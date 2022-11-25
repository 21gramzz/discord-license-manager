interface SharedColors {
  success: string;
  danger: string;
  warning: string;
  primary: string;
}

interface Theme extends SharedColors {
  text: string;
  subText: string;
  body: string;
  surface: string;
  background: string;
  border: string;
  accent: string;
}

export const sharedColors: SharedColors = {
  success: '#4fe073',
  danger: '#e5445f',
  warning: '#f8993a',
  primary: '#007fff',
};

export const darkTheme: Theme = {
  ...sharedColors,
  text: '#fafafa',
  subText: '#9b9b9b',
  body: '#051E37',
  surface: '#304567',
  background: '#0a1929',
  border: '#bebebe',
  accent: '#2196f3',
};

export const lightTheme: Theme = {
  ...sharedColors,
  text: '#000000',
  subText: '#3e5060',
  body: '#fafafa',
  surface: '#e8e8ed',
  background: '#f5f5f5',
  border: '#000000',
  accent: '#2196f3',
};

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
