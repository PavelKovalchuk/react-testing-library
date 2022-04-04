import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('when everything is OK', () => {
  test('should render component without crashing', () => {
    render(<App />);
    screen.debug();
  });

  test('should select the children that are being passed to the CustomInput', () => {
    render(<App />);
    screen.getByText('Input:');
    expect(screen.getByText('Input:')).toBeInTheDocument();
    screen.getByText(/Input:/);
  });
});
