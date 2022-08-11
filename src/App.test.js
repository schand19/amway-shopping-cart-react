import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app component', () => {
  render(<App />);
  const appElement = screen.getByTestId('app-id');
  expect(appElement).toBeInTheDocument();
  expect(appElement).toContainHTML('</Header>');
  expect(appElement).toContainHTML('</Home>');
  expect(appElement).toContainHTML('</Cart>');
});
