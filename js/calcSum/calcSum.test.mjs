import { calcSum } from './calcSum.mjs';

try {
  console.log(calcSum(3, 3));
  console.log(calcSum(3));
} catch (e) {
  console.error(e.message);
}
