import React from 'react';
import styled from 'styled-components';

export interface LabelProps {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  margin?: string;
  htmlFor?: string;
  className?: string;
  display?: 'block' | 'inline-block';
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return <StyledLabel {...props}>{children}</StyledLabel>;
};

const StyledLabel = styled.label<
  Pick<LabelProps, 'color' | 'fontSize' | 'fontWeight' | 'margin' | 'display'>
>`
  user-select: none;
  display: ${({ display }) => display || 'block'};
  font-size: ${({ fontSize }) => fontSize || '1.3rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  color: ${({ theme, color }) => color || theme.text};
  margin: ${({ margin }) => margin || '0 0 0 0'};
`;
