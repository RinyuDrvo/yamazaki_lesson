/**
 * 練習課題9
 * 引数に文字列が複数入った配列を1つとり、配列内の文字列を全て「-」で結合した文字列を返す関数を作成してください。
 */

function q9(arg) {
  /** ここに回答を記述 */
  return arg.reduce((acc, cur) => {
    return acc + '-' + cur;
  })
}

module.exports = q9;
