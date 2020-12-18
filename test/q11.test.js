const q11 = require('../src/q11');

test("adds 26, 'rinyu' is equal {age: 26, name: 'rinyu'}", () => {
  const age = 26;
  const name = 'rinyu';
  const ans = {age: 26, name: 'rinyu'};
  expect(q11(age, name)).toEqual(ans)
})

test("adds 17, 'marin' is equal {age: 17, name: 'marin'}", () => {
  const age = 17;
  const name = 'marin';
  const ans = {age: 17, name: 'marin'};
  expect(q11(age, name)).toEqual(ans)
})
