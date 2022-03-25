const { goThroughMatrix } = require("./index");

let current = [[0, 1, 0], [0, 1, 0][(0, 1, 0)]];
let next = [[], [], []];
let countAllowed = 1;

test("Testing blinker", () => {
  expect(
    goThroughMatrix(current, next, 0, 1).toEqual([
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ])
  );
});
