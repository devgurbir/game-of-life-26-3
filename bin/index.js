#!/usr/bin/env node

let matrix = [];

for(let i = 0; i<16; i++){
    let temp = new Array(16).fill( Math.random() > 0.5 ? "LIVE" : "DEAD")
    matrix.push(temp)
}

console.log(matrix)