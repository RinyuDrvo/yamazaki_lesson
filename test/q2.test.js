const q2 = require('../src/q2');

test('add 12 to equal 数値', () => {
  expect(q2(12)).toBe('数値');
})

test('add abc to equal 文字列', () => {
  expect(q2('abc')).toBe('文字列');
})
