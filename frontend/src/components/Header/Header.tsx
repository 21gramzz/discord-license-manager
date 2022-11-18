import React from 'react';
import styled from 'styled-components';
import { Heading } from '../Elements/Heading';
import { Button } from '../Elements/Button';
import { useToggleTheme } from '../../hooks/useToggleTheme';
import { Icon } from '../Elements/Icon';

export interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const { toggleTheme, mode } = useToggleTheme();

  return (
    <StyledHeader>
      <Heading variants="h1">{title}</Heading>
      <Button onClick={() => toggleTheme()}>
        {mode === 'dark' ? (
          <Icon variants="sun" size="1.4rem" />
        ) : (
          <Icon variants="moon" size="1.2rem" />
        )}
      </Button>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.background};
  border-bottom: ${({ theme }) => `solid 0.5px ${theme.border}`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
`;
