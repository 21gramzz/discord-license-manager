import { useContext } from 'react';
import {
  ToggleThemeContext,
  ToggleThemeContextType,
} from '../contexts/ToggleThemeContext';

export const useToggleTheme = (): ToggleThemeContextType => {
  return useContext(ToggleThemeContext);
};
