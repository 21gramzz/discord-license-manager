import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { SelectField, SelectFieldOption } from '.';

const options: SelectFieldOption[] = [
  {
    label: 'Grape',
    value: 'grape',
  },
  {
    label: 'Apple',
    value: 'apple',
  },
  {
    label: 'Orange',
    value: 'orange',
  },
];

export default {
  component: SelectField,
  title: 'SelectField',
} as ComponentMeta<typeof SelectField>;

export const Default: ComponentStoryObj<typeof SelectField> = {
  args: {
    width: '30rem',
    options,
    onChange: (value?: string[]) => {
      console.log(value);
    },
  },
};

export const MultipleSelect: ComponentStoryObj<typeof SelectField> = {
  args: {
    width: '30rem',
    isMulti: true,
    options,
    onChange: (value?: string[]) => {
      console.log(value);
    },
  },
};

export const Error: ComponentStoryObj<typeof SelectField> = {
  args: {
    className: 'is-invalid',
    width: '30rem',
    isMulti: true,
    options,
    onChange: (value?: string[]) => {
      console.log(value);
    },
  },
};
