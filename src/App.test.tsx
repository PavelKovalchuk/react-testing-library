import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import {mocked} from "ts-jest/utils";
import App from './App';
import { getUser } from './get-user';

jest.mock("./get-user");
const mockGetUser = mocked(getUser, true);

describe('when everything is OK', () => {

  beforeEach(async () => {
    render(<App />);
    await waitFor(() => expect(mockGetUser).toHaveBeenCalled());
  })

  test('should render component without crashing', () => {
    render(<App />);
    // screen.debug();
  });

  test('should select the children that are being passed to the CustomInput', () => {
   // render(<App />);
    screen.getAllByText('Input:');
    expect(screen.getAllByText('Input:')[0]).toBeInTheDocument();
    screen.getAllByText(/Input:/);
  });

  test('should select the input element by its role', () => {
    // render(<App />);
    screen.getAllByRole('textbox');
    expect(screen.getAllByRole('textbox')[0]).toBeInTheDocument();
    expect(screen.getAllByRole('textbox').length).toBe(1);
  });

  test('should select the label element by its text', () => {
    // render(<App />);
    screen.getByLabelText('Input:');
  });

  test('should select element by its placeholder', () => {
    // render(<App />);
    screen.getAllByPlaceholderText('example');
  });

  test('should select the input element by its role with queryBy', () => {
    // render(<App />);
    expect(screen.queryAllByRole('textbox2').length).toBe(0);
  });
});


describe('when the component fetches user successfully', () => {

  beforeEach(async () => {
    mockGetUser.mockClear();
  })

  test('should call fetUser once', async () => {
    render(<App />);
    await waitFor(() => expect(mockGetUser).toHaveBeenCalledTimes(1));
  });

  test('should render the username passed', async () => {
    const name = "David";
    mockGetUser.mockImplementationOnce(() => {
      return Promise.resolve({ id: '2', name });
    });

    render(<App />);
    
    expect(screen.queryByText(/Username/)).toBeNull();

    expect(await screen.findByText(/Username/)).toBeInTheDocument();
    expect(await screen.findByText(/name/)).toBeInTheDocument();
  });

});

describe('when the user enters data in the input', () => {

  beforeEach(async () => {
    mockGetUser.mockClear();
  })

  test('should display the text in the screen', async () => {
    render(<App />);
    await waitFor(() => expect(mockGetUser).toHaveBeenCalled());

    expect(screen.getByText(/You typed .../)).toBeInTheDocument();

    fireEvent.change(screen.getByRole("textbox"), {
      target: {value: "Test"},
    })

    expect(screen.getByText(/You typed Test/)).toBeInTheDocument()
  });
});