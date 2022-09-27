import initStoryshots from '@storybook/addon-storyshots';
import * as stories from './InputField.stories';
import { composeStories } from '@storybook/testing-react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

initStoryshots();

describe('InputField', () => {
  const { Default } = composeStories(stories);

  test('should render default input field', async () => {
    render(<Default placeholder="Type here" />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('should call onChange event', async () => {
    const onChange = jest.fn();
    render(<Default onChange={onChange} />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'test' },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
