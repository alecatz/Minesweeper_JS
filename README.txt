# Minesweeper_JS
JavaScript project for the CodeAcademy course "Build Front-End Web Applications from Scratch"

NOTE:
the game instructions below run the code using a transpiled ES5 version (lib/ folder)
instead of the original ES6 (src/ folder), as ES6 modules imports/exports are not yet supported
as of Node v8.11.1; however feel free to run the code from the /src folder
with future versions supporting ES6!

RULES:
How to play the game:

To play Minesweeper, we will create instances of MineSweeperGame in command line.
- In the command line, navigate to the lib directory and run `node`
- Run `.load game.js` to load the contents of the file.
- Then create a Game instance and run commands like so:
    let game = new Game(3, 3, 3);
    game.playMove(0, 1);
    game.playMove(1, 2);
    (...)
- When done, run `.exit`
