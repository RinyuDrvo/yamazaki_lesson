/**
 * 練習課題8
 * 引数に整数が格納された配列を1つとり、その内容を降順にした配列を返す配列を作成して下さい。
 * 例）引数：[2, 1, 3] 返り値：[3, 2, 1]
 */

function q8(arg) {
  /** ここに回答を記述 */
  arg.sort((a,b) => {
    if(a>b) return -1;
    if(a<b) return 1;
    return 0;
  })
  return arg;
}

module.exports = q8;
