const { TestScheduler } = require('jest');
const q1 = require('../src/q1');

test('adds abc to equal 良い文章', () => {
  expect(q1('abc')).toBe('良い文章');
})

test('adds ab to equal 悪い文章', () => {
  expect(q1('ab')).toBe('悪い文章');
})

test('adds abcdef to equal 普通の文章', () => {
  expect(q1('abcdef')).toBe('普通の文章');
})

test('adds abcdefg to equal まぁまぁな文章', () => {
  expect(q1('abcdefg')).toBe('まぁまぁな文章');
})
