import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent } from '@testing-library/react';

import Pokemon from './Pokemon';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('when a user enters a valid name', () => {
  test('should show the pokemon abilities', async () => {
    const abilities = [
      {
        ability: {
          name: 'name.1.test',
          url: 'url.1.test',
        },
      },
      {
        ability: {
          name: 'name.2.test',
          url: 'url.2.test',
        },
      },
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: { abilities } });

    render(<Pokemon />);

    await userEvent.type(screen.getByRole('textbox'), 'ditto');
    await userEvent.click(screen.getByRole('button'));

    const returnedAbilities = await screen.findAllByRole('listitem');

    expect(returnedAbilities).toHaveLength(2);
  });
});

describe('when a user enters a invalid name', () => {
  test('should show the error message', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error());

    render(<Pokemon />);

    await userEvent.type(screen.getByRole('textbox'), 'invalid');
    await userEvent.click(screen.getByRole('button'));

    const message = await screen.findByText(/Error occured/);

    expect(message).toBeInTheDocument();
  });
});
