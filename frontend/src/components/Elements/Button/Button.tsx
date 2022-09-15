import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  color?: string;
  width?: string;
  height?: string | number;
  margin?: string;
  padding?: string;
  fontSize?: string;
  border?: string;
  backgroundColor?: string;
  variants?: 'default' | 'primary';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variants = 'default',
  ...props
}) => {
  return (
    <>
      {variants === 'primary' ? (
        <StyledPrimaryButton {...props}>{props.children}</StyledPrimaryButton>
      ) : (
        <StyledButton {...props}>{props.children}</StyledButton>
      )}
    </>
  );
};

const StyledButton = styled.button<
  Pick<
    ButtonProps,
    | 'margin'
    | 'padding'
    | 'color'
    | 'backgroundColor'
    | 'width'
    | 'fontSize'
    | 'height'
    | 'border'
  >
>`
  user-select: none;
  color: ${({ color, theme }) => color || theme.text};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.surface};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || '3.5rem'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0.5rem 1.5rem'};
  box-sizing: border-box;
  outline: 0;
  border: ${({ border, theme }) => border || `solid 0.5px ${theme.border}`};
  font-weight: 400;
  font-size: ${({ fontSize }) => fontSize || '1.3rem'};
  letter-spacing: 0.025em;
  border-radius: 0.5rem;
  text-align: center;
  align-items: center;
  white-space: nowrap;
  display: inline-flex;
  justify-content: center;
  &:active {
    transform: translate(-1px, -1px);
  }
`;

const StyledPrimaryButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: 0px;
`;
