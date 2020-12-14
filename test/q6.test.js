const q6 = require('../src/q6');

test("add [''] to true", () => {
  const arg = [''];
  expect(q6(arg)).toBe(true);
})

test("add ['2', '11', '264'] to true", () => {
  const arg = ['2', '11', '264'];
  expect(q6(arg)).toBe(true);
})

test("add ['a', 'hogehoge'] to true", () => {
  const arg = ['a', 'hogehoge'];
  expect(q6(arg)).toBe(true);
})

test("add number to false", () => {
  const arg = 114514;
  expect(q6(arg)).toBe(false);
})

test("add string to false", () => {
  const arg = 'hoge';
  expect(q6(arg)).toBe(false);
})

test("add boolean to false", () => {
  const arg = true;
  expect(q6(arg)).toBe(false);
})

test("add undefind to false", () => {
  const arg = undefined;
  expect(q6(arg)).toBe(false);
})

test("add object to false", () => {
  const arg = {name: 'rinyu', age: 26};
  expect(q6(arg)).toBe(false);
})
