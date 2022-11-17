import React from 'react';
import styled from 'styled-components';

export interface InputFieldErrorTextProps {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  margin?: string;
  children: React.ReactNode;
}

export const InputFieldErrorText: React.FC<InputFieldErrorTextProps> = ({
  children,
  ...props
}) => {
  return <StyledFormErrorMessag {...props}>{children}</StyledFormErrorMessag>;
};

const StyledFormErrorMessag = styled.p<
  Pick<InputFieldErrorTextProps, 'color' | 'fontSize' | 'fontWeight' | 'margin'>
>`
  user-select: none;
  font-size: ${({ fontSize }) => fontSize || '1.2rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  color: ${({ theme, color }) => color || theme.danger};
  margin: ${({ margin }) => margin || '0 0 0 0'};
`;
