/**
 * 練習課題14
 * 第一引数と第二引数共にオブジェクトを取り、それらをマージして返す関数を作成してください。
 * 例）第一引数：{a: 'A'}
 * 　　第二引数：{b: 'B'}
 * 　　返り値　：{a: 'A', b: 'B'}
 */

function q14(arg1, arg2) {
  /* 回答を記述 */
  return Object.assign(arg1, arg2);
}

module.exports = q14;
