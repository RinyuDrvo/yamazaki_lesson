const { expect } = require('@jest/globals');
const q10 = require('../src/q10');

test("add 'javascript' in ['a', 'b', 'c', 'd'] and 2 is equal ['a', 'b', 'javascript', 'c', 'd']", () => {
  const arr = ['a', 'b', 'c', 'd'] ;
  const str = 'javascript'
  const num = 2;
  const ans = ['a', 'b', 'javascript', 'c', 'd']; 
  expect(q10(arr, str, num)).toEqual(ans);
})

test("add 'node' in ['a', 'b', 'c', 'd'] and 0 is equal ['node', 'a', 'b', 'c', 'd']", () => {
  const arr = ['a', 'b', 'c', 'd'] ;
  const str = 'node'
  const num = 0;
  const ans = ['node', 'a', 'b', 'c', 'd']; 
  expect(q10(arr, str, num)).toEqual(ans);
})
