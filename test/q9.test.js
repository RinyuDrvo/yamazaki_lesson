const q9 = require('../src/q9');

test("add ['a', 'b', 'c'] to Equal 'a-b-c;`'", () => {
  arg = ['a', 'b', 'c'];
  ans = 'a-b-c';
  expect(q9(arg)).toBe(ans);
})

test("add ['a'] to Equal 'a'", () => {
  arg = ['a'];
  ans = 'a';
  expect(q9(arg)).toBe(ans);
})

test("add ['abc', 'defg'] to Equal 'abc-defg'", () => {
  arg = ['abc', 'defg'];
  ans = 'abc-defg';
  expect(q9(arg)).toBe(ans);
})
