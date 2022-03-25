NOTE: Best experience in VS Code's terminal

TLDR:

- git clone https://github.com/devgurbir/game-of-life
- From the directory, run "npm install -g"
- gof OR gof --count 25 --size 6
- npm jest (for tests)

Run "git clone https://github.com/devgurbir/game-of-life"

From the directory where you have cloned the repo, run "npm install -g"

Use the command "gof" to start the Game Of Life.

You can provide arguments to customize GOF: size, count. size refers to the size of the universe, count refers to the number of times the function will run
(you can refer to it as the number of generations too.)

e.g gof --count 10 --size 8

TESTS
For now, the project has tests for -> blinker, block, toad. To run tests, run the command "npm jest" from terminal.
