import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { InputField } from '.';

export default { component: InputField } as ComponentMeta<typeof InputField>;

export const Default: ComponentStoryObj<typeof InputField> = {
  args: {
    placeholder: 'Type here',
  },
};

export const Error: ComponentStoryObj<typeof InputField> = {
  args: {
    placeholder: 'Type here',
    className: 'is-invalid',
  },
};
