/**
 * @function calcSum
 * @param {number[]} args
 * @throws {Error} Error: two arguments are required
 * @throws {Error} Error: both arguments must be numbers
 * @returns {number}
 */

export const calcSum = (...args) => {
  if (args.length !== 2) {
    throw new Error('Error: two arguments are required.');
  }
  const [num1, num2] = args;
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Error: both arguments must be numbers.');
  }
  return num1 + num2;
};
