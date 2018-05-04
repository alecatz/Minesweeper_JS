//board class
class Board {
  constructor (rows,cols,bombs) {
    this._bombs = bombs;
    this._cells = rows*cols;
    this._playerBoard = Board.makePlayerBoard(rows,cols);
    this._bombBoard = Board.makeBombBoard(rows,cols,bombs);
  }

  get playerBoard() {
    return this._playerBoard;
  }

  //method: check the value of a flipped cell
  flipCell(row,col) {
    if (this.playerBoard[row][col] !== ' ') {
        console.log('This cell has already been flipped!');
        return;
    } else if (this._bombBoard[row][col] === 'B') {
      this.playerBoard[row][col] = 'B';
    } else {
      this.playerBoard[row][col] = this.numberAdjacentBombs(row,col);
    }
    this._cells--;
  }

  //method: get number of bombs adiacent to the flipped cell
  numberAdjacentBombs(row,col) {
    const adjacentOffsets = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    const numberRows = this._bombBoard.length;
    const numberCols = this._bombBoard[0].length;
    let numberBombs = 0;
    adjacentOffsets.forEach(offset => {
      const adjacentRow = row + offset[0];
      const adjacentCol = col + offset[1];
      if (adjacentRow >= 0 && adjacentRow < numberRows && adjacentCol >= 0 && adjacentCol < numberCols) {
        if (this._bombBoard[adjacentRow][adjacentCol] === 'B') {
          numberBombs++;
        }
      }
    });
    return numberBombs;
  }

  //method: checks if all non-bomb cells have been flipped
  hasSafeCells() {
    return this._cells === this._bombs;
  }

}

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





//function: print any board
const printBoard = board => {
  console.log(board.map(row => row.join('|')).join('\n'));
};

//TEST: print both boards with arbitrary number of rows, columns, bombs
let rows = 3;
let cols = 4;
let bombs =5;
let playerBoard = makePlayerBoard(rows,cols);
let bombBoard = makeBombBoard(rows,cols,bombs);
console.log('Player Board:');
printBoard(playerBoard);
console.log('Bomb Board:');
printBoard(bombBoard);
flipCell(playerBoard,bombBoard,0,0);
console.log('Updated Player Board:');
printBoard(playerBoard);
