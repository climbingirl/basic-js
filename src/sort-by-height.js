const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = arr.filter((el) => el !== -1).sort((a, b) => a - b);

  let pos = 0;
  while (true) {
    let foundIndex = arr.indexOf(-1, pos);
    if (foundIndex === -1) break;
    result.splice(foundIndex, 0, -1);
    pos = foundIndex + 1;
  }

  return result;
}

module.exports = {
  sortByHeight
};
