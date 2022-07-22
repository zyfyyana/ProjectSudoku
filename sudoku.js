/* eslint-disable no-plusplus */
// const test = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";

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
}

  return matrixToBoard(matrix);
}
const board = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function matrixToBoard(boardMatrix) {
  return boardMatrix.map((line) => line.join('')).join('');
}
//console.log(matrixToBoard(solve(board)));
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

function boardToBlocks(boardString) {
  const boardBlocks = [];

  const firstSubstring = boardString.substring(0, 27);
  const secondSubstring = boardString.substring(27, 54);
  const thirdSubstring = boardString.substring(54, 81);

  const firstThreeBlocks = new Array(3).fill(null).map((_, i) => {
    let blockLine = '';
    blockLine += firstSubstring.substring(i, i + 3);
    blockLine += firstSubstring.substring(i + 9, i + 12);
    blockLine += firstSubstring.substring(i + 18, i + 21);
    console.log(blockLine);
    return blockLine.split('').map((el) => (el === '-' ? 0 : Number(el)));
  });
  const secondThreeBlocks = new Array(3).fill(null).map((_, i) => {
    let blockLine = '';
    blockLine += secondSubstring.substring(i, i + 3);
    blockLine += secondSubstring.substring(i + 9, i + 12);
    blockLine += secondSubstring.substring(i + 18, i + 21);
    return blockLine.split('').map((el) => (el === '-' ? 0 : Number(el)));
  });
  const thirdThreeBlocks = new Array(3).fill(null).map((_, i) => {
    let blockLine = '';
    blockLine += thirdSubstring.substring(i, i + 3);
    blockLine += thirdSubstring.substring(i + 9, i + 12);
    blockLine += thirdSubstring.substring(i + 18, i + 21);
    return blockLine.split('').map((el) => (el === '-' ? 0 : Number(el)));
  });
  return boardBlocks.concat(firstThreeBlocks).concat(secondThreeBlocks).concat(thirdThreeBlocks);
}

function isSolved(board) {
  const boardMatrix = boardToMatrix(board);
  const boardBlocks = boardToBlocks(board);

  for (let i = 0; i < boardMatrix.length; i++) {
    const boardLine = [...boardMatrix[i]];
    if (boardLine.sort().some((el, i) => el !== i + 1)) {
      return false;
    }
  }

  for (let j = 0; j < boardMatrix.length; j++) {
    const vertLine = [];
    for (let i = 0; i < boardMatrix.length; i++) {
      vertLine.push(boardMatrix[i][j]);
    }
    if (vertLine.sort().some((el, i) => el !== i + 1)) {
      return false;
    }
  }

  for (let i = 0; i < boardBlocks.length; i++) {
    const boardBlock = [...boardBlocks[i]];
    if (boardBlock.sort().some((el, i) => el !== i + 1)) {
      return false;
    }
  }
  title
  return true;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

const line = document.querySelector(".line");
const numbers = document.querySelector(".numbers");
const numbers2 = document.querySelector(".numbers2");

// TEEEST
const btn = document.querySelector("button");
//

function renderBlock() {
 let block = document.createElement("div");
 block.classList.add("block");
 line.appendChild(block);
}

for (let i = 0; i < 81; i++) {
 renderBlock();
}

function renderNum(value, numbers, clas) {
 let num = document.createElement("div");
 num.classList.add(clas);
 num.textContent = value;
 numbers.appendChild(num);
}

for (let i = 1; i < 10; i++) {
 renderNum(i, numbers, "num");
 renderNum(i, numbers2, "num2");
}

const allBlock = document.querySelectorAll(".block");

let startText = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

let test = prettyBoard()

btn.addEventListener("click", () => {
  location.reload()
 });

let rec = 0;
let b = setInterval(() => {
 if (rec === 81) {
   clearTimeout(b);
 }
 allBlock[rec].textContent = test[rec];
 rec++;
}, 50);

function prettyBoard() {
  return solve(board);
}

const title = document.querySelector('.title')
title.textContent = startText
// prettyBoard();

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
