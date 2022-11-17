import React from 'react';
import styled from 'styled-components';

export interface ErrorMessageProps {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  margin?: string;
  padding?: string;
  width?: string;
  maxWidth?: string;
  message: string;
}

export const FormErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  ...props
}) => {
  return <StyledFormErrorMessage {...props}>{message}</StyledFormErrorMessage>;
};

const StyledFormErrorMessage = styled.div<
  Pick<
    ErrorMessageProps,
    | 'color'
    | 'fontSize'
    | 'fontWeight'
    | 'margin'
    | 'padding'
    | 'maxWidth'
    | 'width'
  >
>`
  user-select: none;
  font-size: ${({ fontSize }) => fontSize || '1.2rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  color: ${({ theme, color }) => color || theme.text};
  margin: ${({ margin }) => margin || '0 0 0 0'};
  border: ${({ theme }) => `solid 0.5px ${theme.danger}`};
  width: ${({ width }) => width || 'auto'};
  max-width: ${({ maxWidth }) => maxWidth || 'auto'};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.danger};
  padding: ${({ padding }) => padding || '2rem'};
  margin: ${({ margin }) => margin || '0 0 2rem 0'};
`;
