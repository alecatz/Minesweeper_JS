//function: create player board of any size
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

//function: create bomb board of any size
//to fix: number of bombs can potentially be larger than number of cells!
//to fix: bombs can potentially overlap!
const makeBombBoard = (rows,cols,bombs) => {
  let board = [];
  for (let row = 0; row < rows; row+=1) {
    board.push([]);
    for (let col = 0; col < cols; col+=1) {
      board[row].push(null);
    }
  }
  let placedBombs = 0;
  while (placedBombs < bombs) {
    let randomRow = Math.floor(Math.random() * rows);
    let randomCol = Math.floor(Math.random() * cols);
    board[randomRow][randomCol] = 'B';
    placedBombs+=1;
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

/*TEST: create empty player board, print it, update some cells, print it again
let board = makePlayerBoard(3,3);
printBoard(board);
board[0][1] = '1';
board[2][2]= 'B';
printBoard(board);
*/

/*TEST: create bomb board and print it
let board = makeBombBoard(3,3,3);
printBoard(board);
*/
