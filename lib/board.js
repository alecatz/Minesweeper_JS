'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//board class
var Board = exports.Board = function () {
  function Board(rows, cols, bombs) {
    _classCallCheck(this, Board);

    this._bombs = bombs;
    this._cells = rows * cols;
    this._playerBoard = Board.makePlayerBoard(rows, cols);
    this._bombBoard = Board.makeBombBoard(rows, cols, bombs);
  }

  _createClass(Board, [{
    key: 'flipCell',


    //method: check the value of a flipped cell
    value: function flipCell(row, col) {
      if (this._playerBoard[row][col] !== ' ') {
        console.log('This cell has already been flipped!');
        return;
      } else if (this._bombBoard[row][col] === 'B') {
        this._playerBoard[row][col] = 'B';
      } else {
        this._playerBoard[row][col] = this.numberAdjacentBombs(row, col);
      }
      this._cells--;
    }

    //method: get number of bombs adiacent to the flipped cell

  }, {
    key: 'numberAdjacentBombs',
    value: function numberAdjacentBombs(row, col) {
      var _this = this;

      var adjacentOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
      var numberRows = this._bombBoard.length;
      var numberCols = this._bombBoard[0].length;
      var numberBombs = 0;
      adjacentOffsets.forEach(function (offset) {
        var adjacentRow = row + offset[0];
        var adjacentCol = col + offset[1];
        if (adjacentRow >= 0 && adjacentRow < numberRows && adjacentCol >= 0 && adjacentCol < numberCols) {
          if (_this._bombBoard[adjacentRow][adjacentCol] === 'B') {
            numberBombs++;
          }
        }
      });
      return numberBombs;
    }

    //method: checks if all non-bomb cells have been flipped

  }, {
    key: 'hasSafeCells',
    value: function hasSafeCells() {
      return this._cells !== this._bombs;
    }

    //method: print player board

  }, {
    key: 'printBoard',
    value: function printBoard() {
      console.log(this._playerBoard.map(function (row) {
        return row.join('|');
      }).join('\n'));
    }

    //method (class): create player board of any size

  }, {
    key: 'playerBoard',
    get: function get() {
      return this._playerBoard;
    }
  }], [{
    key: 'makePlayerBoard',
    value: function makePlayerBoard(rows, cols) {
      var board = [];
      for (var row = 0; row < rows; row += 1) {
        board.push([]);
        for (var col = 0; col < cols; col += 1) {
          board[row].push(' ');
        }
      }
      return board;
    }

    //method (class): create bomb board of any size

  }, {
    key: 'makeBombBoard',
    value: function makeBombBoard(rows, cols, bombs) {
      if (bombs > rows * cols) {
        console.log('Error! Number of bombs can\'t be higher than number of cells!');
        return;
      }
      var board = [];
      for (var row = 0; row < rows; row += 1) {
        board.push([]);
        for (var col = 0; col < cols; col += 1) {
          board[row].push(null);
        }
      }
      var placedBombs = 0;
      while (placedBombs < bombs) {
        var randomRow = Math.floor(Math.random() * rows);
        var randomCol = Math.floor(Math.random() * cols);
        if (board[randomRow][randomCol] !== 'B') {
          board[randomRow][randomCol] = 'B';
          placedBombs++;
        }
      }
      return board;
    }
  }]);

  return Board;
}();