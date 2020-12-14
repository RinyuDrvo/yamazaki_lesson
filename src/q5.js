/**
 * 練習課題5
 * 文字列の入った配列を2つ引数に取り、第二引数の配列内に含まれる文字列と一致する文字列を抽出、その結果を配列として返す関数を作成してください。
 * 例）第一引数：['aa', 'bb', 'cc', 'bb'] 第二引数：['bb', 'cc'] 返り値：['bb', 'cc', 'bb']
 * 制限事項：引数の配列内には文字列以外は含まれない
 */

function q5(arg1, arg2) {
  /** ここに回答を記述 */
  return arg1.filter(str1 => {
    return arg2.some(str2 => str1 === str2)
  })
}

module.exports = q5;
