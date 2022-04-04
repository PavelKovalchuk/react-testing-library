import { sumPositiveNumbers } from './example';

describe('when the arguments passed are positive numbers', () => {
  test('should return the right answer', () => {
    expect(sumPositiveNumbers(4, 5)).toBe(9);
  });
});

describe('when one of the arguments is a negative number', () => {
  test('should throw an error', () => {
    let errorSaved: any;
    try {
      sumPositiveNumbers(-1, 5);
    } catch (error) {
      errorSaved = error;
    }
    expect(errorSaved).toBeDefined();
    expect(errorSaved.message).toBe('One of the numbers is negative');
  });
});
