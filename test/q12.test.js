const q12 = require('../src/q12');

test("add [1, 3, 2, 4] to Equal ['1', '2', '3', '4']", () => {
  const arg = [1, 3, 2, 4];
  const ans = ['1', '2', '3', '4'];
  expect(q12(arg)).toEqual(ans);
})

test("add [13, 5433, 22, 0, 9] to Equal ['0', '9', '13', '22', '5433']", () => {
  const arg = [13, 5433, 22, 0, 9];
  const ans = ['0', '9', '13', '22', '5433'];
  expect(q12(arg)).toEqual(ans);
})
