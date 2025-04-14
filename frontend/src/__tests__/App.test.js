import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the React Frontend!/i);
  expect(linkElement).toBeInTheDocument();
});
