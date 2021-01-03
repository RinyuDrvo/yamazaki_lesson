const q14 = require('../src/q14');

test("adds {a: 'A') and {b: 'B'} to equal {a: 'A', b: 'B'}", () => {
  const arg1 = {a: 'A'};
  const arg2 = {b: 'B'};
  const ans = {a: 'A', b: 'B'};
  expect(q14(arg1, arg2)).toEqual(ans);
})

test("adds {name: 'james', age: 23) and {name: 'lars', age: 46} to equal {name: 'james', age: 23, name: 'lars', age, 46}", () => {
  const arg1 = {name: 'james', age: 23};
  const arg2 = {name: 'lars', age: 46};
  const ans = {name: 'james', age: 23, name: 'lars', age: 46};
  expect(q14(arg1, arg2)).toEqual(ans);
})
