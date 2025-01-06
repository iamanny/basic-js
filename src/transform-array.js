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
  // Проверяем, является ли arr массивом
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  
  const result = [];
  let i = 0;

  while (i < arr.length) {
    const current = arr[i];
    
    if (current === '--double-next') {
      // Удваиваем следующий элемент
      if (i + 1 < arr.length) {
        result.push(arr[i + 1]);
      }
    } else if (current === '--double-prev') {
      // Удваиваем предыдущий элемент
      if (i - 1 >= 0 && arr[i - 2] !== '--discard-next') {
        result.push(arr[i - 1]);
      }
    } else if (current === '--discard-next') {
      // Пропускаем следующий элемент
      i++;
    } else if (current === '--discard-prev') {
      // Пропускаем предыдущий элемент
      if (result.length > 0) {
        result.pop();
      }
    } else {
      // Если элемент не является управляющим, просто добавляем его
      result.push(current);
    }
    i++;
  }

  return result;
}

module.exports = {
  transform
};