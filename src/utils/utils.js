// Удаляем лишнее. Приводим к нормальному виду
function preParse(value) {
  return value
    .split(',')
    .map((id) => id.trim()) // Убираем пробелы
    .filter((id) => id !== ''); // Отфильтровываем пустые строки
}

// Преобразует все элементы массива в числа
const parseArrayToNumbers = (arr) => arr.map(Number);

export {
  preParse,
  parseArrayToNumbers,
};
