import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('when everything is OK', () => {

  beforeEach(() => {
    // render(<App />);
  })

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

  test('should select the input element by its role', () => {
    render(<App />);
    screen.getByRole('textbox');
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('should select the label element by its text', () => {
    render(<App />);
    screen.getByLabelText('Input:');
  });

  test('should select element by its placeholder', () => {
    render(<App />);
    screen.getByPlaceholderText('example');
  });
});
