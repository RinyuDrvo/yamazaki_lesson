/**
 * 練習課題4
 * 整数が複数入っている配列を引数に取り、その内容を全て加算して数値型で出力する関数を作成してください。
 * 制限事項：引数に取る配列は整数以外含まれない。引数に含まれる整数は0~100000。
 */

function q4(arg) {
  /** 回答を記述 */
  return arg.reduce((sum, element) => sum + element, 0)
}

module.exports = q4;
