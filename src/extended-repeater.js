const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';
  const addition = ('addition' in options) ? options.addition + '' : '';

  const makeStr = (str, separator, times) => {
    let res = str;

    for (let i = 1; i < times; i++) {
      res += separator + str;
    }

    return res;
  }

  const additionStr = makeStr(addition, additionSeparator, options.additionRepeatTimes);
  const string = str + additionStr;
  const result = makeStr(string, separator, options.repeatTimes);

  return result;
}

module.exports = {
  repeater
};
