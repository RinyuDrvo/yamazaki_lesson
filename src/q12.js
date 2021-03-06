/**
 * 練習課題12
 * 引数に整数を含む配列を1つ取り、整数を文字列に変換し、昇順に並べ替えた配列を返す関数を作成してください。
 * 例）引数：[1, 3, 2, 4] 返り値：['1', '2', '3', '4']
 */

function q12(arg) {
  /** 回答を記述 */
  const arr = arg;
  arr.sort((a,b) => {
    if(a<b) return -1;
    if(a>b) return 1;
    return 0;
  })
  return arr.map(element => element.toString());
}

module.exports = q12;
