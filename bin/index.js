#!/usr/bin/env node
const chalk = require("chalk");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

runGof();

// console.log(runGof(3, 6));

function runGof(countArg, sizeArg) {
  let size = argv.size || sizeArg || 32;
  let c = argv.count || countArg || Number.MAX_SAFE_INTEGER;

  let [current, next] = initializeMatrix(size);
  return goThroughMatrix(current, next, 0, c);

  //   if (argv.size && argv.count) {
  //     return goThroughMatrix(current, next, 0, argv.count);
  //   } else if (argv.size) {
  //     let [current, next] = initializeMatrix(argv.size);
  //     return goThroughMatrix(current, next, 0);
  //   } else if (argv.count) {
  //     let [current, next] = initializeMatrix();
  //     return goThroughMatrix(current, next, 0, argv.count);
  //   } else {
  //     let [current, next] = initializeMatrix();
  //     return goThroughMatrix(current, next, 0);
  //   }
}

function initializeMatrix(n = 32) {
  // Initially creating the matrix
  let currentGen = [];
  let nextGen = [];

  for (let i = 0; i < n; i++) {
    let temp1 = new Array(n);
    let temp2 = new Array(n);

    currentGen.push(temp1);
    nextGen.push(temp2);
  }

  // initially populating current gen randomly with live/dead

  for (let i = 0; i < currentGen.length; i++) {
    for (let j = 0; j < currentGen[i].length; j++) {
      currentGen[i][j] = Math.random() > 0.5 ? 0 : 1;
    }
  }

  return [currentGen, nextGen];
}

function goThroughMatrix(matrix, nextMatrix, count, countAllowed) {
  if (countOfLiving(matrix) == 0) {
    console.log("Everyone died :(");
    return matrix;
  }
  // Number of times function will run - taken from --count argument
  if (count == countAllowed) {
    return matrix;
  }

  // print the current generation
  printMatrix(matrix);

  // go through each element and update the element according to rules of the game
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 1) {
        let count = countOfLivingNeighbours(matrix, i, j);
        // less than 2 living neighbours
        if (count < 2) {
          nextMatrix[i][j] = 0;
        }
        // if 2 or 3 living neighbours, live
        else if (count == 2 || count == 3) {
          nextMatrix[i][j] = 1;
        }
        // else death by overpopulation i.e 3+ living neighbours
        else {
          nextMatrix[i][j] = 0;
        }
      } else if (matrix[i][j] == 0) {
        let count = countOfLivingNeighbours(matrix, i, j);
        if (count == 3) {
          nextMatrix[i][j] = 1;
        } else {
          nextMatrix[i][j] = 0;
        }
      }
    }
  }
  // generations swapped so that the nextGen becomes the currentGen
  // for the next call
  //   printMatrix(nextMatrix);
  if (argv.interval) {
    setTimeout(
      () => goThroughMatrix(nextMatrix, matrix, count + 1),
      argv.interval
    );
  } else {
    return goThroughMatrix(nextMatrix, matrix, count + 1, countAllowed);
  }
}

function countOfLivingNeighbours(matrix, i, j) {
  let count = 0;

  if (matrix[i - 1] != undefined && matrix[i - 1][j - 1] != undefined) {
    count += matrix[i - 1][j - 1];
  }

  if (matrix[i - 1] != undefined && matrix[i - 1][j] != undefined) {
    count += matrix[i - 1][j];
  }

  if (matrix[i - 1] != undefined && matrix[i - 1][j + 1] != undefined) {
    count += matrix[i - 1][j + 1];
  }

  if (matrix[i] != undefined && matrix[i][j - 1] != undefined) {
    count += matrix[i][j - 1];
  }

  if (matrix[i] != undefined && matrix[i][j + 1] != undefined) {
    count += matrix[i][j + 1];
  }

  if (matrix[i + 1] != undefined && matrix[i + 1][j - 1] != undefined) {
    count += matrix[i + 1][j - 1];
  }

  if (matrix[i + 1] != undefined && matrix[i + 1][j] != undefined) {
    count += matrix[i + 1][j];
  }

  if (matrix[i + 1] != undefined && matrix[i + 1][j + 1] != undefined) {
    count += matrix[i + 1][j + 1];
  }

  return count;
}

function countOfLiving(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      count += matrix[i][j];
    }
  }
  return count;
}

function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let res = "";
    for (let j = 0; j < matrix[i].length; j++) {
      res +=
        matrix[i][j] == 1
          ? chalk.black.bgWhite.bold(matrix[i][j])
          : chalk.red.bgBlack.bold(matrix[i][j]);
      res += " ";
    }
    console.log(res);
  }
}

// goThroughMatrix(currentGen, nextGen, 0);
module.exports = { goThroughMatrix };
