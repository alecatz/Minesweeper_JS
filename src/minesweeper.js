//function: create a board of any size
const makeBoard = (rows,cols) => {
  let board = [];
  for (let i = 0; i < rows ; i+=1) {
    board.push([]);
    for (let j = 0; j < cols ; j+=1) {
      board[i].push(' ');
    }
  }
  return board;
};

//function: print any board
const printBoard = (anyBoard) => {
  console.log('Current board:');
  for (let i = 0; i < anyBoard.length; i+=1) {
    console.log(anyBoard[i].join(' | '));
  }
};

//create empty board, print it, update some cells, print it again
let board = makeBoard(3,3);
printBoard(board);
board[0][1] = '1';
board[2][2]= 'B';
printBoard(board);
