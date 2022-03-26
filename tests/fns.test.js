const goThroughMatrixOnce = require("./fns");

let current1 = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
];
let next1 = [[], [], []];

test("Testing blinker 1", () => {
  let result = goThroughMatrixOnce(current1, next1);
  expect(result).toEqual([
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ]);
});

let current2 = [
  [0, 0, 0],
  [1, 1, 1],
  [0, 0, 0],
];
let next2 = [[], [], []];

test("Testing blinker 2", () => {
  expect(goThroughMatrixOnce(current2, next2)).toEqual([
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ]);
});

let currentForBlock = [
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];

let nextForBlock = [[], [], [], []];

test("Testing block", () => {
  expect(goThroughMatrixOnce(currentForBlock, nextForBlock)).toEqual([
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ]);
});

let currentToad1 = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

let nextToad1 = [[], [], [], [], [], []];

test("Testing toad 1", () => {
  expect(goThroughMatrixOnce(currentToad1, nextToad1)).toEqual([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]);
});

let currentToad2 = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

let nextToad2 = [[], [], [], [], [], []];

test("Testing toad 2", () => {
  expect(goThroughMatrixOnce(currentToad2, nextToad2)).toEqual([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]);
});
