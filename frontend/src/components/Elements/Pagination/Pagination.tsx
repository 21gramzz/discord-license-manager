/* eslint-disable array-callback-return */
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';

interface PaginationProps {
  pageCount: number;
  defaultPage?: number;
  onChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  defaultPage = 1,
  onChange,
}) => {
  const [current, setCurrentPage] = useState(defaultPage);

  useEffect(() => {
    setCurrentPage(defaultPage);
  }, [defaultPage]);

  const handleBack = useCallback(() => {
    if (current < 2) return;
    setCurrentPage(current - 1);
    onChange(current - 1);
  }, [current, onChange]);

  const handleNext = useCallback(() => {
    if (current >= pageCount) return;
    setCurrentPage(current + 1);
    onChange(current + 1);
  }, [pageCount, current, onChange]);

  const handleSelect = useCallback(
    (page: number) => {
      setCurrentPage(page);
      onChange(page);
    },
    [onChange],
  );

  return (
    <Container>
      {pageCount > 0 ? (
        <Navigation>
          <UnorderedList>
            <Button onClick={handleBack}>
              <Icon variants="arrowLeft" size="2.2rem" />
            </Button>

            {[...Array(pageCount).keys()]
              .map((i) => ++i)
              .map((i) => {
                if (i === current) {
                  return (
                    <List key={i}>
                      <Button onClick={() => handleSelect(i)} isActive={true}>
                        {i}
                      </Button>
                    </List>
                  );
                } else if (
                  i === 1 ||
                  i === pageCount ||
                  (5 <= current && (i === current - 1 || i === current + 1)) ||
                  (current < 5 && i < 6) ||
                  (current > pageCount - 4 && i > pageCount - 5)
                ) {
                  return (
                    <List key={i}>
                      <Button onClick={() => handleSelect(i)}>{i}</Button>
                    </List>
                  );
                } else if (
                  (current >= 4 && i === 2) ||
                  (current >= 4 && current + 2 === i) ||
                  (current < 4 && 6 === i)
                ) {
                  return (
                    <List key={i}>
                      <Button>...</Button>
                    </List>
                  );
                }
              })}

            <Button onClick={handleNext}>
              <Icon variants="arrowRight" size="2.2rem" />
            </Button>
          </UnorderedList>
        </Navigation>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Navigation = styled.nav``;

const UnorderedList = styled.ul`
  display: flex;
  padding: 0;
`;

const List = styled.li`
  list-style: none;
`;

const Button = styled.button<{ isActive?: boolean }>`
  font-size: 1.4rem;
  font-weight: 400;
  border-radius: 50%;
  border: 0;
  height: 3.2rem;
  width: 3.2rem;
  margin: 0 0.4rem;
  display: inline-flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 0.5rem;
  user-select: none;
  color: ${({ color, theme }) => color || theme.text};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.surface : 'transparent'};
`;
