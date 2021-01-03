const q15 = require('../src/q15');

test("adds {a: 'A', b: 'B'} and 'b' to equal 'B'", () => {
  const arg1 = {a: 'A', b: 'B'};
  const arg2 = 'b';
  const ans = 'B';
  expect(q15(arg1, arg2)).toBe(ans);
})

test("adds {name: 'rinyu', age: 26, position: 'FE'} and 'age' to equal 26", () => {
  const arg1 = {name: 'rinyu', age: 26, position: 'FE'};
  const arg2 = 'age';
  const ans = 26;
  expect(q15(arg1, arg2)).toBe(ans);
})
