//function: create a board of any size
const makePlayerBoard = (rows,cols) => {
  let board = [];
  for (let row = 0; row < rows ; row+=1) {
    board.push([]);
    for (let col = 0; col < cols ; col+=1) {
      board[row].push(' ');
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

/*TEST: create empty board, print it, update some cells, print it again
let board = makePlayerBoard(3,3);
printBoard(board);
board[0][1] = '1';
board[2][2]= 'B';
printBoard(board);
*/
