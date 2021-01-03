const q13 = require('../src/q13');

test("adds [['one', 'hoge'],['two', 'fuga'],['three', 'piyo@piyo']] and [1, 1] to equal 'fuga'", () => {
  const arg1 = [['one', 'hoge'],['two', 'fuga'],['three', 'piyo@piyo']];
  const arg2 = [1, 1];
  const ans = 'fuga';
  expect(q13(arg1, arg2)).toBe(ans);
})

test("adds [['one', 'hoge', 'two'],['fuga', 'three', 'piyo@piyo']] and [0, 2] to equal 'two'", () => {
  const arg1 = [['one', 'hoge', 'two'],['fuga', 'three', 'piyo@piyo']];
  const arg2 = [0, 2];
  const ans = 'two';
  expect(q13(arg1, arg2)).toBe(ans);
})
