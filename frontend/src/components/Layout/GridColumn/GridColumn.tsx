import React from 'react';
import styled from 'styled-components';

export interface FormGridColumnProps {
  gridTemplateColumns?: string;
  columnGap?: string;
  children: React.ReactNode;
}

export const GridColumn: React.FC<FormGridColumnProps> = (props) => {
  return (
    <StyledFormGridColumn {...props}>{props.children}</StyledFormGridColumn>
  );
};

const StyledFormGridColumn = styled.div<
  Pick<FormGridColumnProps, 'gridTemplateColumns' | 'columnGap'>
>`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) =>
    gridTemplateColumns || 'none'};
  column-gap: ${({ columnGap }) => columnGap || '2rem'};
`;
