const q7 = require('../src/q7');

test("adds 1,2,3 to equal ['1','2','3']", () => {
  expect(q7(1, 2, 3)).toEqual(['1', '2', '3']);
})

test("adds 211,52,26343 to equal ['211','52','26343']", () => {
  expect(q7(211, 52, 26343)).toEqual(['211', '52', '26343']);
})
