import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Pagination } from '.';

export default { component: Pagination, title: 'Pagination' } as ComponentMeta<
  typeof Pagination
>;

export const Demo: ComponentStoryObj<typeof Pagination> = {
  args: {
    defaultPage: 1,
    pageCount: 10,
    onChange(page: number) {
      console.log('page:', page);
    },
  },
};
