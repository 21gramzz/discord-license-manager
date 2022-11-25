import { Header } from '../../Header';
import styled from 'styled-components';
import React, { ReactNode } from 'react';

export interface ContentLayoutProps {
  children: ReactNode;
  padding?: string;
  title?: string;
}

export const ContentLayout: React.FC<ContentLayoutProps> = ({
  children,
  title = 'License Manager',
  ...props
}) => {
  return (
    <Container>
      <Header title={title} />
      <Inner {...props}>{children}</Inner>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Inner = styled.div<Pick<ContentLayoutProps, 'padding'>>`
  padding: ${({ padding }) => padding || 'auto'};
`;
