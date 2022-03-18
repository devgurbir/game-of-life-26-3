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
        matrix[i][j] = Math.random() > 0.5 ? "LIVE" : "DEAD"
    }
}

// go through each element and update the element according to rules of the game
function goThroughMatrix(matrix){

}