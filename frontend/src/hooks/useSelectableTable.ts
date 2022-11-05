import { useCallback, useEffect, useState } from 'react';
import { CellDefinition } from '../components/Elements/SelectableTable';

export const useSelectableTable = <T>(
  tableRows: CellDefinition<T>[],
): {
  toggleSelected: (id: string) => void;
  toggleSelectedAll: () => void;
  isSelectedAll: boolean;
  isSelected: (id: string) => boolean;
  selectedRows: CellDefinition<T>[];
} => {
  const [isSelectedAll, setSelectedAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState<CellDefinition<T>[]>([]);

  const toggleSelected = useCallback(
    (id: string) => {
      if (selectedRows.find((row) => row._id === id)) {
        setSelectedRows(selectedRows.filter((row) => row._id !== id));
      } else {
        const targetRow = tableRows.find((row) => row._id === id);
        if (targetRow) {
          setSelectedRows([...selectedRows, targetRow]);
        }
      }
      setSelectedAll(false);
    },
    [selectedRows, tableRows],
  );

  const toggleSelectedAll = useCallback(() => {
    isSelectedAll ? setSelectedRows([]) : setSelectedRows(tableRows);
    setSelectedAll(!isSelectedAll);
  }, [isSelectedAll, tableRows]);

  const isSelected = useCallback(
    (id: string) => {
      return selectedRows.find((row) => row._id === id) ? true : false;
    },
    [selectedRows],
  );

  useEffect(() => {
    setSelectedRows([]);
    setSelectedAll(false);
  }, [tableRows]);

  return {
    toggleSelected,
    toggleSelectedAll,
    isSelectedAll,
    isSelected,
    selectedRows,
  };
};
