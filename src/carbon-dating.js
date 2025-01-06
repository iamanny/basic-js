const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity ) {
  if (
    typeof sampleActivity !== 'string' || // Данные должны быть строкой
    isNaN(parseFloat(sampleActivity)) || // Строка должна быть преобразуема в число
    parseFloat(sampleActivity) <= 0 || // Активность должна быть положительным числом
    parseFloat(sampleActivity) > MODERN_ACTIVITY // Активность не может быть больше 15
  ) {
    return false;
  }

  const activity = parseFloat(sampleActivity);
  const k = Math.LN2 / HALF_LIFE_PERIOD; // Постоянная скорости распада
  const age = Math.log(MODERN_ACTIVITY / activity) / k; // Формула для расчёта возраста

  return Math.ceil(age); // Округляем возраст вверх
}

module.exports = {
  dateSample
};
