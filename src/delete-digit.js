const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nStr = String(n);

  const numbers = [];
  for (let i = 0; i < nStr.length; i++) {
    const num = nStr.slice(0, i) + nStr.slice(i + 1);
    numbers.push(+num);
  }

  return Math.max(...numbers);
}

module.exports = {
  deleteDigit
};
