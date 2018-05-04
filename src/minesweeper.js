//game class
class Game {
  constructor(rows,cols,bombs) {
    this._board = new Board(rows,cols,bombs);
  }

  playMove(row,col) {
    this._board.flipCell(row,col);
    if (this._board[row][col] === 'B') {
      console.log('Game Over! Final Board:');
      this._board.printBoard();
    } else if (!this._board.hasSafeCells()) {
      console.log('Congratulations, You Won!');
    } else {
      console.log('Updated Board:');
      this._board.printBoard();
    }
  }

}

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
    return this._cells !== this._bombs;
  }

  //method: print player board
  printBoard() {
    console.log(this.playerBoard.map(row => row.join('|')).join('\n'));
  }

  //method (class): create player board of any size
  static makePlayerBoard(rows,cols) {
    let board = [];
    for (let row = 0; row < rows ; row+=1) {
      board.push([]);
      for (let col = 0; col < cols ; col+=1) {
        board[row].push(' ');
      }
    }
    return board;
  }

  //method (class): create bomb board of any size
    static makeBombBoard(rows,cols,bombs) {
    if (bombs > rows*cols) {
      console.log('Error! Number of bombs can\'t be higher than number of cells!');
      return;
    }
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
  }

}

//TEST area
let g = new Game(3,3,3);
g.playMove(1,0);
