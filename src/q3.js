/**
 * for文を使用して、引数に数値を渡すと、1から引数の数値までが順序に格納された配列が返り値となる関数を作成してください。
 * 例） 引数に5を渡すと[1, 2, 3, 4, 5]という配列が返り値となる。
 */

function q3(arg) {
  /** 回答を記述 */
  const ans = [];
  for(let i = 1; i <= arg; i++) {
    ans.push(i);
  }
  return ans;
}

module.exports = q3;
