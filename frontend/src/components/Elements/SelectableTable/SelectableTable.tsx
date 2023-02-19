/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export interface ColumnDefinition<T> {
  field: keyof T;
  title: string;
  onClick?: (data: CellDefinition<T>) => void;
}

export interface CellDefinitionRequiredParameter {
  _id: string;
}

export type CellDefinition<T> = T & CellDefinitionRequiredParameter;

export interface TableProps<T> {
  columns: ColumnDefinition<T>[];
  rows: CellDefinition<T>[];
  toggleSelected: (_id: string) => void;
  toggleSelectedAll: () => void;
  isSelectedAll: boolean;
  isSelected: (id: string) => boolean;
  width?: string;
  margin?: string;
}

interface StyledTableProps
  extends Pick<TableProps<unknown>, 'width' | 'margin'> {
  gridTemplateColumns: string;
}

export const SelectableTable = <T,>({
  columns,
  rows,
  toggleSelected,
  toggleSelectedAll,
  isSelectedAll,
  isSelected,
  width,
  margin,
}: TableProps<T>) => {
  const [tableHeight, setTableHeight] = useState('auto');
  const tableRef = useRef<HTMLTableElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const headers = columns.map((colum) => {
    return { ...colum, ref: useRef<HTMLTableCellElement>(null) };
  });

  const mouseDown = (index: number) => {
    setActiveIndex(index);
  };

  const mouseMove = useCallback(
    (e: MouseEvent) => {
      const gridColumns = headers.map((col, i) => {
        if (i === headers.length - 1) {
          return '1fr';
        }

        if (col.ref.current) {
          if (i === activeIndex) {
            const width = e.clientX - col.ref.current.offsetLeft;
            if (width >= 120) {
              return `${width}px`;
            }
          }
          return `${col.ref.current.offsetWidth}px`;
        }
        return '';
      });

      if (tableRef.current) {
        tableRef.current.style.gridTemplateColumns = `50px ${gridColumns.join(
          ' ',
        )}`;
      }
    },
    [activeIndex, headers],
  );

  const removeListeners = useCallback(() => {
    window.removeEventListener('mousemove', mouseMove);
    window.removeEventListener('mouseup', removeListeners);
  }, [mouseMove]);

  const mouseUp = useCallback(() => {
    setActiveIndex(null);
    removeListeners();
  }, [setActiveIndex, removeListeners]);

  useEffect(() => {
    setTableHeight(String(tableRef?.current?.offsetHeight) + 'px');
  }, [rows]);

  useEffect(() => {
    if (activeIndex !== null) {
      window.addEventListener('mousemove', mouseMove);
      window.addEventListener('mouseup', mouseUp);
    }

    return () => {
      removeListeners();
    };
  }, [activeIndex, mouseMove, mouseUp, removeListeners]);

  return (
    <Table
      ref={tableRef}
      width={width}
      margin={margin}
      gridTemplateColumns={`50px ${[...Array(columns.length)]
        .map(() => '1fr')
        .join(' ')}`}
    >
      <TableHeader>
        <TableRow>
          <TableHead textAlign="center">
            <input
              type="checkbox"
              checked={isSelectedAll}
              onChange={toggleSelectedAll}
            />
          </TableHead>
          {headers.map((colum, i) => (
            <TableHead key={`${String(colum.field)}`} ref={colum.ref}>
              <div>{colum.title}</div>
              {i !== columns.length - 1 ? (
                <ResizeHandle
                  height={tableHeight}
                  onMouseDown={() => mouseDown(i)}
                />
              ) : null}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {rows.map((row) => (
          <TableRow key={row._id}>
            <TableCell textAlign="center" width="50px">
              <input
                type="checkbox"
                checked={isSelected(row._id)}
                onChange={() => toggleSelected(row._id)}
              />
            </TableCell>
            {columns.map((col) => (
              <TableCell
                key={`${row[col.field]}`}
                onClick={() => col.onClick && col.onClick(row)}
              >{`${row[col.field]}`}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const ResizeHandle = styled.div<{ height: string }>`
  display: block;
  cursor: col-resize;
  width: 1rem;
  height: ${({ height }) => height};
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  border-right: 0.3rem solid transparent;
  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const Table = styled.table<StyledTableProps>`
  user-select: none;
  color: ${({ theme }) => theme.text};
  width: ${({ width }) => width || 'auto'};
  margin: ${({ margin }) => margin || '0'};
  border-radius: 0.5rem;
  display: grid;
  overflow: scroll;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  border: ${({ theme }) => `solid 0.5px ${theme.border}`};
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TableRow = styled.tr`
  display: contents;
  &:last-child td {
    border: 0;
  }
`;

const TableHead = styled.th<{
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  textAlign?: 'start' | 'end' | 'center' | 'justify';
}>`
  position: relative;
  text-align: ${({ textAlign }) => textAlign || 'start'};
  white-space: nowrap;
  text-overflow: ellipsis;
  border-bottom: ${({ theme }) => '0.5px solid ' + theme.border};
  color: ${({ color }) => color || 'inherit'};
  background-color: ${({ theme }) => theme.body};
  font-size: ${({ fontSize }) => fontSize || '1.4rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '600'};
  padding: ${({ padding }) => padding || '1rem'};
`;

const TableCell = styled.td<{
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  textAlign?: 'start' | 'end' | 'center' | 'justify';
}>`
  position: relative;
  text-align: ${({ textAlign }) => textAlign || 'start'};
  white-space: nowrap;
  text-overflow: ellipsis;
  border-bottom: ${({ theme }) => '0.5px solid ' + theme.border};
  color: ${({ color }) => color || 'inherit'};
  background-color: ${({ theme }) => theme.body};
  font-size: ${({ fontSize }) => fontSize || '1.3rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  padding: ${({ padding }) => padding || '1rem'};
`;

const TableHeader = styled.thead`
  display: contents;
`;

const TableBody = styled.tbody`
  display: contents;
`;
