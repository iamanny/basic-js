const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // Создаем результатирующую матрицу, которая будет содержать количество мин для каждой ячейки
  let result = matrix.map(row => row.slice());

  // Соседние клетки: по диагонали и по сторонам
  const directions = [
    [-1, -1], [-1, 0], [-1, 1], // верхняя строка
    [0, -1],         [0, 1],     // середина
    [1, -1], [1, 0], [1, 1]      // нижняя строка
  ];

  // Проходим по всем ячейкам поля
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        // Если текущая ячейка содержит мину, то пропускаем, так как это уже учтено
        continue;
      }

      let count = 0;
      // Проверяем соседей
      for (let [dx, dy] of directions) {
        const newX = i + dx;
        const newY = j + dy;

        // Проверяем, что новые координаты находятся внутри границ поля
        if (newX >= 0 && newX < matrix.length && newY >= 0 && newY < matrix[i].length) {
          if (matrix[newX][newY] === true) {
            count++; // Если соседняя ячейка содержит мину, увеличиваем счетчик
          }
        }
      }
      // Записываем количество мин в соответствующую ячейку результата
      result[i][j] = count;
    }
  }

  return result;
}

module.exports = {
  minesweeper
};