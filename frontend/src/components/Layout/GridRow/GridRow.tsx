import React from 'react';
import styled from 'styled-components';

interface GridRowProps {
  gridTemplateRows?: string;
  rowGap?: string;
  children: React.ReactNode;
}

export const GridRow: React.FC<GridRowProps> = (props) => {
  return <StyledFormGridCRow {...props}>{props.children}</StyledFormGridCRow>;
};

const StyledFormGridCRow = styled.div<
  Pick<GridRowProps, 'gridTemplateRows' | 'rowGap'>
>`
  display: grid;
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows || 'none'};
  row-gap: ${({ rowGap }) => rowGap || '2.5rem'};
`;
