import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Button } from './Button';

export default { component: Button } as ComponentMeta<typeof Button>;

export const Default: ComponentStoryObj<typeof Button> = {
  args: {
    children: 'Default Button',
  },
};

export const Primary: ComponentStoryObj<typeof Button> = {
  args: {
    variants: 'primary',
    children: 'Primary Button',
  },
};
