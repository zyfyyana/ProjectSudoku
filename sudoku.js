/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function boardToMatrix(boardString) {
  const boardMatrix = new Array(9).fill(null);
  return boardMatrix.map((_, i) => {
    const boardLine = boardString.substring(i * 9, (i + 1) * 9);
    return boardLine.split('').map((el) => (el === '-' ? null : Number(el)));
  });
}

function boardToBlocks(boardString) {
  const boardBlocks = new Array(9).fill(null);
  return boardBlocks.map((_, i) => {
    const boardLine = boardString.substring(i * 9, (i + 1) * 9);
    return boardLine.split('').map((el) => (el === 0 ? null : Number(el)));
  });
}

function isSolved(board) {
  const boardMatrix = boardToMatrix(board);
  for (let i = 0; i < boardMatrix.length; i++) {
    const boardLine = [...boardMatrix[i]];
    if (boardLine.sort().some((el, i) => el !== i + 1)) {
      return false;
    }
  }

  for (let j = 0; j < boardMatrix.length; j++) {
    const vertLine = [];
    for (let j = 0; j < boardMatrix.length; j++) {
      vertLine.push(boardMatrix[j][i]); 
    }
    if (vertLine.sort().some((el, i) => el !== i + 1)) {
      return false;
    }
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
