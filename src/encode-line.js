const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";

  let charCount = 1;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === str[i + 1]) {
      charCount++;
    } else {
      result += `${charCount > 1 ? charCount : ""}${char}`;
      charCount = 1;
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
