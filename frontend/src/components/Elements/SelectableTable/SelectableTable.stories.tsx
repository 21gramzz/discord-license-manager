import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';
import { TableProps, CellDefinition, ColumnDefinition } from '.';
import { useSelectableTable } from '../../../hooks/useSelectableTable';
import { SelectableTable } from '.';

interface SampleUser {
  firstName: string;
  lastName: string;
}

const columns: ColumnDefinition<SampleUser>[] = [
  {
    field: 'firstName',
    title: 'First Name',
  },
  {
    field: 'lastName',
    title: 'Last Name',
  },
];

const rows: CellDefinition<SampleUser>[] = [
  {
    _id: '1',
    firstName: 'John',
    lastName: 'Lennon',
  },
  {
    _id: '2',
    firstName: 'Sean',
    lastName: 'Lennon',
  },
];

const Mock: React.FC<
  Pick<TableProps<SampleUser>, 'columns' | 'rows' | 'width'>
> = ({ columns, rows, width }) => {
  const { isSelected, toggleSelected, toggleSelectedAll, isSelectedAll } =
    useSelectableTable<SampleUser>(rows || []);
  return (
    <SelectableTable
      columns={columns}
      rows={rows}
      toggleSelected={toggleSelected}
      toggleSelectedAll={toggleSelectedAll}
      isSelectedAll={isSelectedAll}
      isSelected={isSelected}
      width={width}
    />
  );
};

export default {
  component: Mock,
} as ComponentMeta<typeof Mock>;

export const Demo: ComponentStoryObj<typeof Mock> = {
  args: { columns, rows, width: '' },
  render: (args) => <Mock {...args} />,
};
