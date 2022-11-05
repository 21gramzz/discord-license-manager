import React from 'react';
import styled from 'styled-components';

export interface InputProps {
  className?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  color?: string;
  backgroundColor?: string;
  width?: string | number;
  height?: string | number;
  margin?: string;
  padding?: string;
  value?: string | number;
  step?: string;
  min?: string | number;
  max?: string | number;
  defaultValue?: string | number;
  fontSize?: string;
  fontWeight?: string;
  inputRef?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

export const InputField: React.FC<InputProps> = ({ inputRef, ...props }) => {
  return <StyledInputField ref={inputRef} {...props} />;
};

const StyledInputField = styled.input<
  Pick<
    InputProps,
    | 'margin'
    | 'padding'
    | 'color'
    | 'backgroundColor'
    | 'width'
    | 'height'
    | 'fontSize'
    | 'fontWeight'
  >
>`
  color: ${({ color, theme }) => color || theme.text};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || '3.5rem'};
  margin: ${({ margin }) => margin || '0'};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};
  padding: ${({ padding }) => padding || '0.5rem 1.5rem'};
  outline: 0;
  border: ${({ theme }) => 'solid 0.5px ' + theme.border};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  font-size: ${({ fontSize }) => fontSize || '1.3rem'};
  letter-spacing: 0.025em;
  border-radius: 0.5rem;
  ::placeholder {
    color: ${({ theme }) => theme.border};
  }
  &.is-invalid {
    border: solid 1px ${({ theme }) => theme.danger};
  }
`;
