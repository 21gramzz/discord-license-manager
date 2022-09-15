import initStoryshots from '@storybook/addon-storyshots';
import * as stories from './Button.stories';
import { composeStories } from '@storybook/testing-react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

initStoryshots();

describe('Button', () => {
  const { Default } = composeStories(stories);

  test('should render default button', async () => {
    render(<Default>Click here</Default>);
    expect(screen.getByText(/click here/i)).toBeInTheDocument();
  });

  test('should render primary button', async () => {
    render(<Default variants="primary">Click here</Default>);
    expect(screen.getByText(/click here/i)).toBeInTheDocument();
  });

  test('should call click event', async () => {
    const handleClick = jest.fn();
    render(<Default onClick={handleClick}>Click here</Default>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
