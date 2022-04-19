import { getUser } from './get-user';

describe('when everything is OK', () => {
  test('should return a response', async () => {
    // mock an Axios
    const result = await getUser();
    expect(result).toStrictEqual({ id: '1', name: 'Paul' });
  });
});
