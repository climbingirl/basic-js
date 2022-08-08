const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
const calcSumOfDigits = (numStr) => {
  let sum = 0;

  for (const digit of numStr) {
    sum += +digit;
  }

  return sum;
};

function getSumOfDigits(n) {
  if (n < 10) return n;

  let result = calcSumOfDigits(String(n));

  return result < 10 ? result : getSumOfDigits(result);
}

module.exports = {
  getSumOfDigits,
};
