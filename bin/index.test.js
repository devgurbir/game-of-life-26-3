const { goThroughMatrix } = require("./index");

let current1 = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
];
let next1 = [[], [], []];

test("Testing blinker 1", () => {
  expect(goThroughMatrix(current1, next1, 0, 1)).toEqual([
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
  expect(goThroughMatrix(current2, next2, 0, 1)).toEqual([
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
  expect(goThroughMatrix(currentForBlock, nextForBlock, 0, 1)).toEqual([
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
  expect(goThroughMatrix(currentToad1, nextToad1, 0, 1)).toEqual([
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
  expect(goThroughMatrix(currentToad2, nextToad2, 0, 1)).toEqual([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]);
});
