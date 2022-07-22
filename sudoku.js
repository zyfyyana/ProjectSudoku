function boardToMatrix(boardString) {
  const boardMatrix = new Array(9).fill(null);
  return boardMatrix.map((_, i) => {
    const line = boardString.substring(i * 9, (i + 1) * 9);
    return line.split('').map((el) => (el === '-' ? 0 : Number(el)));
  });
}

//const board = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const matrix = boardToMatrix(boardString);
  for (let i = 0; i < matrix.length; i += 1) {
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < matrix.length; j++) {
      const randomNum = Math.floor(Math.random() * 9) + 1;
      if (matrix[i][j] === 0) {
        matrix[i][j] = randomNum;
      }
    }
  }

  return matrix;
}
//console.log(solve(board));

function matrixToBoard(boardMatrix) {
  return boardMatrix.map((line) => line.join('')).join('');
}
//console.log(matrixToBoard(solve(board)));

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
