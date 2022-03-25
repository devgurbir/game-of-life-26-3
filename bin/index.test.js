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
