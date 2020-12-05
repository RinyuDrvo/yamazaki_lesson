/**
 * 数値か文字列を受け取る引数を1つ取り、
 * それが文字列であった場合は「文字列」、
 * 数値であった場合は「数値」という文字列を返す関数を作成してください。
 */

function q2(arg) {
  /** 回答を記述 */
  if(typeof arg === 'string') return '文字列';
  if(typeof arg === 'number') return '数値';
}

module.exports = q2;
