const q4 = require('../src/q4');

test('add [2,3] to equal 5', () => {
  const arg = [2, 3];
  expect(q4(arg)).toBe(5);
});

test('add [1,2,3,4,5] to equal 15', () => {
  const arg = [1, 2, 3, 4, 5];
  expect(q4(arg)).toBe(15);
});

test('add [0,9,40,700,2000,30000,100000] to equal 132749', () => {
  const arg = [0, 9, 40, 700, 2000, 30000, 100000];
  expect(q4(arg)).toBe(132749);
});
