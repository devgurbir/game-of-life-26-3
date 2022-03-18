#!/usr/bin/env node
const chalk = require("chalk");

// Initially creating the matrix
let currentGen = [];
let nextGen = [];

for(let i = 0; i<8; i++){
    let temp1 = new Array(8)
    let temp2 = new Array(8)

    currentGen.push(temp1)
    nextGen.push(temp2)
}

// initially populating current gen randomly with live/dead

for(let i = 0; i<currentGen.length; i++){
    for(let j = 0; j<currentGen[i].length; j++){
        currentGen[i][j] = Math.random() > 0.5 ? 0 : 1
    }
}

function goThroughMatrix(matrix, nextMatrix, count){
    if(countOfLiving(matrix) == 0){
        return
    }
    if(count == 10){
        return
    }
    // print the current generation
    printMatrix(matrix)

    // go through each element and update the element according to rules of the game    
    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j<matrix[i].length; j++){
            if(matrix[i][j] == 1){
                let count = countOfLivingNeighbours(matrix, i, j)
                // less than 2 living neighbours
                if(count < 2){
                    nextMatrix[i][j] = 0
                }
                // if 2 or 3 living neighbours, live
                else if( count == 2 || count == 3){
                    nextMatrix[i][j] = 1;
                }
                // else death by overpopulation i.e 3+ living neighbours
                else {
                    nextMatrix[i][j] = 0
                }                
            }
            else if(matrix[i][j] == 0){
                let count = countOfLivingNeighbours(matrix, i, j)
                if(count == 3){
                    nextMatrix[i][j] = 1;
                }
                else{
                    nextMatrix[i][j] = 0;
                }
            }
        }
    }    
    // generations swapped so that the nextGen becomes the currentGen
    // for the next call
    // printMatrix(nextMatrix)
    goThroughMatrix(nextMatrix, matrix, count+1)
}

function countOfLivingNeighbours(matrix, i, j){
    let count = 0;

    if(matrix[i-1] != undefined && matrix[i-1][j-1] != undefined){
        count += matrix[i-1][j-1]
    }

    if(matrix[i-1] != undefined && matrix[i-1][j] != undefined){
        count += matrix[i-1][j]
    }

    if(matrix[i-1] != undefined && matrix[i-1][j+1] != undefined){
        count += matrix[i-1][j+1]
    }

    if(matrix[i] != undefined && matrix[i][j-1] != undefined){
        count += matrix[i][j-1]
    }

    if(matrix[i] != undefined && matrix[i][j+1] != undefined){
        count += matrix[i][j+1]
    }

    if(matrix[i+1] != undefined && matrix[i+1][j-1] != undefined){
        count += matrix[i+1][j-1]
    }

    if(matrix[i+1] != undefined && matrix[i+1][j] != undefined){
        count += matrix[i+1][j]
    }

    if(matrix[i+1] != undefined && matrix[i+1][j+1] != undefined){
        count += matrix[i+1][j+1]
    }

    return count
}

function countOfLiving(matrix){
    let count = 0;
    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j<matrix[i].length; j++){
            count += matrix[i][j]
        }
    }
    return count
}

function printMatrix(matrix){    
    for(let i = 0; i<matrix.length; i++){
        let res = ""
        for(let j = 0; j<matrix[i].length; j++){
            res += matrix[i][j] == 1 ? chalk.white.bold(matrix[i][j]) : chalk.red.bold(matrix[i][j])
            res += " "
        }
        console.log(res)
    }
    let line = ""
    for(let i = 0; i<matrix[0].length; i++){
        line += "--"
    }
    console.log(line)
}

goThroughMatrix(currentGen, nextGen, 0)