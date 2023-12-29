require = require('esm')(module);
import { sum } from '../src/utils/sum';

test('Sum two numbers correctly', () => {
  const numberOne = 5;
  const numberTwo = 10;

  const result = sum(numberOne, numberTwo);

  expect(result).toBe(15);
});
