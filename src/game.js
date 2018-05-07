import Board from './board.js';

//game class
class Game {
  constructor(rows,cols,bombs) {
    this._board = new Board(rows,cols,bombs);
  }

  playMove(row,col) {
    this._board.flipCell(row,col);
    if (this._board.playerBoard[row][col] === 'B') {
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
