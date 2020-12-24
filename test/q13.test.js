const q13 = require('../src/q13');

test("adds [['abc', 'def'], ['hijk', 'lm']] and 'ij' to Equal[[2, 1]]", () => {
  const arg1 = [['abc', 'def'], ['hijk', 'lm']];
  const arg2 = 'ij';
  const ans = [[1, 0]];
  expect(q13(arg1, arg2)).toEqual(ans);
})

test("adds [['op', '', 'q'], ['rstuv', 'wx'], ['yz', 'abcdef', 'gophi']] and 'op' to Equal[[0, 0], [2, 2]]", () => {
  const arg1 = [['op', '', 'q'], ['rstuv', 'wx'], ['yz', 'abcdef', 'gophi']];
  const arg2 = 'op';
  const ans = [[0, 0], [2, 2]];
  expect(q13(arg1, arg2)).toEqual(ans);
})
