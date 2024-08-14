import { calcSum } from './calcSum.js';

describe('calcSum', () => {
  test('Unit test 1: should return 7 for inputs 4 and 3', () => {
    const num1 = (4);
    const num2 = (3);
    const result = calcSum(num1, num2);
    expect(result).toBe(7);
  });

  test('Unit test 2: should throw an error if less than two arguments are provided', () => {
    const num1 = (3);
    expect(() => calcSum(num1)).toThrow('Error: two arguments are required.');
  });

  test('Unit test 3', () => {
    const num1 = ('77');
    const num2 = (3);
    expect(() => calcSum(num1, num2)).toThrow('Error: both arguments must be numbers.');
  });
});
