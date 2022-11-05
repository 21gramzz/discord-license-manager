import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../Button';
import { useModal } from '../../../hooks/useModal';

const Mock: React.FC = () => {
  const { openModal } = useModal();
  return (
    <>
      <Button
        onClick={() =>
          openModal(<div style={{ width: '60rem', height: '30rem' }} />)
        }
      >
        Open Modal
      </Button>
    </>
  );
};

export default {
  component: Mock,
} as ComponentMeta<typeof Mock>;

export const Demo: ComponentStoryObj<typeof Mock> = {
  render: () => <Mock />,
};
