#!/usr/bin/env node

// Initially creating the matrix
let matrix = [];
for(let i = 0; i<16; i++){
    let temp = new Array(16)
    matrix.push(temp)
}

// populating matrix randomly with live/dead

for(let i = 0; i<matrix.length; i++){
    for(let j = 0; j<matrix[i].length; j++){
        matrix[i][j] = Math.random() > 0.5 ? 0 : 1
    }
}

console.log(matrix)


function goThroughMatrix(matrix){
    // go through each element and update the element according to rules of the game    
    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j<matrix[i].length; j++){
            if(matrix[i][j] == 1){

            }
        }
    }
}

function checkLiveElement(matrix, i, j){
    // rules of the game:

    // if less than 2 living neighbours, die.
}

function checkNeighbours(matrix, i, j){

}