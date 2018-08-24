# Minesweeper_JS
JavaScript project for the CodeAcademy course "Build Front-End Web Applications from Scratch"

NOTE:
the game instructions below run the code using a transpiled ES5 version (lib/ folder)
instead of the original ES6 (src/ folder), as ES6 modules imports/exports are not yet supported
as of Node v8.11.1; however feel free to run the code from the /src folder
with future versions supporting ES6!

RULES:

To play Minesweeper, you need to create instances of MineSweeperGame in command line.
- navigate to the lib directory and run `node`
- run `.load game.js` to load the contents of the file
- create a Game instance and run commands like so:
    let game = new Game(3, 3, 3);
    game.playMove(0, 1);
    game.playMove(1, 2);
    (...)
- when done, run `.exit`


FEATURE WISHLIST: (potential new additions)
- add a timer which lets players know how long it took them to win (or lose).
- add recursive flipping: when a tile that isn't touching a bomb (= 0) is flipped,
  all adjacent non-bomb tiles additionally flip over (perhaps only for large boards?).
- add a method to place flags at a tile instead of flipping that tile
  (i.e. to mark inferred position of bombs).
  If a tile has a flag on it, it can't be flipped over.
