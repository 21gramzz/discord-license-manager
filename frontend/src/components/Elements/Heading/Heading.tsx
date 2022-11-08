import React from 'react';
import styled from 'styled-components';

interface HeadingProps {
  children: React.ReactNode;
  variants: 'h1' | 'h2' | 'h3';
  className?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  margin?: string;
  padding?: string;
}

export const Heading1: React.FC<HeadingProps> = ({
  variants,
  children,
  ...props
}) => {
  switch (variants) {
    case 'h1':
      return <StyledHeading1 {...props} />;
    case 'h2':
      return <StyledHeading2 {...props} />;
    case 'h3':
      return <StyledHeading3 {...props} />;
  }
};

const StyledHeading1 = styled.h1<
  Pick<HeadingProps, 'color' | 'fontSize' | 'fontWeight' | 'margin' | 'padding'>
>`
  user-select: none;
  color: ${({ color, theme }) => color || theme.text};
  font-size: ${({ fontSize }) => fontSize || '2rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
`;

const StyledHeading2 = styled(StyledHeading1.withComponent('h2'))`
  font-size: ${({ fontSize }) => fontSize || '1.5rem'};
`;

const StyledHeading3 = styled(StyledHeading1.withComponent('h3'))`
  font-size: ${({ fontSize }) => fontSize || '1.2rem'};
`;
