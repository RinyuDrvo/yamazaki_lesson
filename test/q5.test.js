const { TestScheduler } = require('jest');
const q5 = require('../src/q5');

test("adds ['aa','bb','cc','bb'] ['bb','cc'] to equal ['bb','cc','bb']", () => {
  const arg1 = ['aa', 'bb', 'cc', 'bb'];
  const arg2 = ['bb', 'cc'];
  const ans = ['bb', 'cc', 'bb']
  expect(q5(arg1, arg2)).toEqual(ans);
})

test("adds ['aa','cc'] ['bb','cc'] to equal ['cc']", () => {
  const arg1 = ['aa', 'cc'];
  const arg2 = ['bb', 'cc'];
  const ans = ['cc']
  expect(q5(arg1, arg2)).toEqual(ans);
})

test("adds ['aa','c','abbc','bb'] ['bb','cc'] to equal ['bb']", () => {
  const arg1 = ['aa', 'c', 'abbc', 'bb'];
  const arg2 = ['bb', 'cc'];
  const ans = ['bb']
  expect(q5(arg1, arg2)).toEqual(ans);
})
