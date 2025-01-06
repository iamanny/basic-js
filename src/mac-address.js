const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {String} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  // Регулярное выражение для проверки формата MAC-48 адреса
  const regex = /^([0-9A-F]{2}-){5}[0-9A-F]{2}$/;
  
  // Проверяем соответствие строке с регулярным выражением
  return regex.test(inputString);
}

module.exports = {
  isMAC48Address
};