/**
 * 練習課題7
 * 引数を3つとり、それぞれの引数が文字列として格納された配列を返す関数を作成してください
 * 例）引数：1, 2, 3 返り値：['1', '2', '3']
 * 制限事項：引数は整数のみ受け取る
 */

function q7(arg1, arg2, arg3) {
  /** ここに回答を記述 */
  const ans = [];
  ans.push(arg1.toString());
  ans.push(arg2.toString());
  ans.push(arg3.toString());
  return ans;
}

module.exports = q7;
