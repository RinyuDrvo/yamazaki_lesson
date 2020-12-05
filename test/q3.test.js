const q3 = require('../src/q3');

test('add 5 to equal [1~5]', () => {
  const ans = [1, 2, 3, 4, 5];
  expect(q3(5)).toEqual(ans);
});

test('add 10 to equal [1~10]', () => {
  const ans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(q3(10)).toEqual(ans);
});
