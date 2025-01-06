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
  const digits = String(n).split(''); // Преобразуем число в массив цифр
    let max = 0;

    for (let i = 0; i < digits.length; i++) {
        // Создаем число без текущей цифры
        const numberWithoutDigit = Number(digits.slice(0, i).concat(digits.slice(i + 1)).join(''));
        max = Math.max(max, numberWithoutDigit); // Обновляем максимум
    }

    return max;
}

module.exports = {
  deleteDigit
};
