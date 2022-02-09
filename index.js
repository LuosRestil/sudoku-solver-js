const board = [
  [0,0,3,0,0,5,0,2,1],
  [0,8,0,2,0,3,5,0,9],
  [0,0,0,4,0,1,3,6,8],
  [0,0,0,6,0,0,0,0,0],
  [0,3,6,0,0,0,0,0,0],
  [0,2,0,1,0,0,0,8,4],
  [0,9,2,3,0,4,8,0,0],
  [0,0,0,7,8,2,0,0,3],
  [3,5,0,0,0,0,2,0,7]
]

if (sudoku(board)) {
  console.log("Answer found!");
  printBoard(board);
} else {
  console.log("No answer found");
}

function sudoku(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] === 0) {
        for (let i = 1; i <= 9; i++) {
          if (isValidAtPosition(board, i, row, col)) {
            board[row][col] = i;
            if (sudoku(board)) {
              return true;
            } else {
              board[row][col] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

function isValidInRow(board, num, row) {
  for (let col = 0; col < board.length; col++) {
    if (board[row][col] === num) {
      return false;
    }
  }
  return true;
}

function isValidInCol(board, num, col) {
  for (let row = 0; row < board.length; row++) {
    if (board[row][col] === num) {
      return false;
    }
  }
  return true;
}

function isValidInBox(board, num, row, col) {
  let boxStartRow = row - (row % 3);
  let boxStartCol = col - (col % 3);
  for (let i = boxStartRow; i < boxStartRow + 3; i++) {
    for (let j = boxStartCol; j < boxStartCol + 3; j++) {
      if (board[i][j] === num) {
        return false;
      }
    }
  }
  return true;
}

function isValidAtPosition(board, num, row, col) {
  return isValidInRow(board, num, row) &&
    isValidInCol(board, num, col) &&
    isValidInBox(board, num, row, col);
}

function printBoard(board) {
  for (let row = 0; row < board.length; row++) {
    if (row % 3 === 0 && row !== 0) {
      console.log("---------------")
    }
    let rowStr = "";
    for (let col = 0; col < board.length; col++) {
      if (col % 3 === 0 && col !== 0) {
        rowStr += " | ";
      }
      rowStr += board[row][col];
    }
    console.log(rowStr);
  }
}
