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
    if (board[randomRow][randomCol] !== 'B') {
      board[randomRow][randomCol] = 'B';
      placedBombs++;
    }
  }
  return board;
};

//function: get number of bombs adiacent to flipped cell
const numberAdjacentBombs = (bombBoard,row,col) => {
  const adjacentOffsets = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
  const numberRows = bombBoard.length;
  const numberCols = bombBoard[0].length;
  let numberBombs = 0;
  adjacentOffsets.forEach(offset => {
    const adjacentRow = row + offset[0];
    const adjacentCol = col + offset[1];
    if (adjacentRow > 0 && adjacentRow < numberRows && adjacentCol > 0 && adjacentCol < numberCols) {
      if (bombBoard[adjacentRow][adjacentCol] === 'B') {
        numberBombs++;
      }
    }
  });
  return numberBombs;
};

//function: flip cell
const flipCell = (playerBoard, bombBoard, row, col) => {
  if (playerBoard[row][col] !== ' ') {
      console.log('This cell has already been flipped!');
      return;
  } else if (bombBoard[row][col] === 'B') {
    playerBoard[row][col] = 'B';
  } else {
    playerBoard[row][col] = numberAdjacentBombs(bombBoard,row,col);
  }
};

//function: print any board
const printBoard = board => {
  console.log(board.map(row => row.join('|')).join('\n'));
};

//TEST: print both boards with arbitrary number of rows, columns, bombs
let rows = 3;
let cols = 4;
let bombs =5;
console.log('Player Board:');
printBoard(makePlayerBoard(rows,cols));
console.log('Bomb Board:');
printBoard(makeBombBoard(rows,cols,bombs));
