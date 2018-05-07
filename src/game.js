// To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);
// game.playMove(1, 2);
// When done run `.exit`

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
