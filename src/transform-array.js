const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw Error(`'arr' parameter must be an instance of the Array!`);

  const transformedArr = [...arr];

  for (let i = 0; i < transformedArr.length; i++) {
    const el = transformedArr[i];

    switch (el) {
      case '--discard-prev':
        if (Number.isInteger(transformedArr[i - 1])) transformedArr.splice(i - 1, 1);
        break;
      case '--discard-next':
        if (transformedArr[i + 1]) transformedArr.splice(i + 1, 1);
        break;
      case '--double-prev':
        if (Number.isInteger(transformedArr[i - 1])) transformedArr.splice(i, 0, transformedArr[i - 1])
        i++;
        break;
      case '--double-next':
        if (transformedArr[i + 1]) transformedArr.splice(i + 1, 0, transformedArr[i + 1]);
        break;
      default:
        break;
    }
  }

  return transformedArr.filter(i => (i !== '--discard-prev') && (i !== '--discard-next') && (i !== '--double-prev') && (i !== '--double-next'));
}

module.exports = {
  transform
};
