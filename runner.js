const fs = require('fs');
const sudoku = require('./sudoku');

// The sudoku puzzles that your program will solve can be found
// in the sudoku_puzzles.txt file.
//
// Remember, the file has newline characters at the end of each line,
// so we should remove them.

function sudokuParse(content) {
    //console.log(content);
    let firstLine = content.split('\n')[0];
    console.log(firstLine);


    return  content;
}


fs.readFile('./sudoku_puzzles.txt', 'utf-8', function read(err, data) {
    if (err) {
        throw err;
    }

    let boardString = sudokuParse(data);  

    let solvedBoard = sudoku.solve(boardString);
	if(sudoku.isSolved(solvedBoard)) {
	  console.log("The board was solved!");
	  console.log(sudoku.prettyBoard(solved_board));
	}
	else {
	  console.log("The board wasn't solved :(");
	}

});

