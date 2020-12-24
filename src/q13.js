/**
 * 練習課題13
 * 第一引数に文字列のみを含む二次元配列、第二引数に文字列を取り、
 * 第一引数の二次元配列の中から第二引数に指定された文字列を検索し、
 * 当てはまる全てのインデックスを配列で返す関数を作成してください
 * 例）第一引数：[['abc', 'deijf'], ['hijk', 'lm']] 第二引数： 'ij'
 * 　　返り値：[[0, 1], [1, 0]]
 * 制限事項：文字列は必ず二次元目の配列に格納されていることとする
 */

function q13(arg1, arg2) {
  /** ここに回答を記述 */
  let ansChildIndex = 0;
  const parentIndex = arg1.findIndex(parentElement => {
    const childIndex = parentElement.findIndex(childElement => {
      return childElement.includes(arg2)
    });
    const isAnsIndex = childIndex !== -1;
    isAnsIndex ? ansChildIndex = childIndex : false;
    return isAnsIndex;
  });
  return [[parentIndex,ansChildIndex]];
}

module.exports = q13;
