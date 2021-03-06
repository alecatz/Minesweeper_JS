'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _board = require('./board.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//note: not a module (class, not object!) so needs {} import notation

//game class
var Game = function () {
  function Game(rows, cols, bombs) {
    _classCallCheck(this, Game);

    this._board = new _board.Board(rows, cols, bombs);
  }

  _createClass(Game, [{
    key: 'playMove',
    value: function playMove(row, col) {
      this._board.flipCell(row, col);
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
  }]);

  return Game;
}();
