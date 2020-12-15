const q8 = require('../src/q8');

test("add [2,1,3] to equal [3,2,1]", () => {
  arg = [2, 1, 3];
  ans = [3, 2, 1];
  expect(q8(arg)).toEqual(ans)
})

test("add [0,2,1,3,11] to equal [11,3,2,1,0]", () => {
  arg = [0, 2, 1, 3, 11];
  ans = [11, 3, 2, 1, 0];
  expect(q8(arg)).toEqual(ans)
})
