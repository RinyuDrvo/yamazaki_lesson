/**
 * 問題１
 * 文字列の引数を1つ取り、
 * その文字数が３の倍数であった場合は「良い文章」、
 * ２の倍数であった場合は「悪い文章」、
 * ２の倍数かつ３の倍数であった場合は「普通の文章」、
 * それ以外の時は「まあまあな文章」という文字列を返す関数を作成しなさい
 */
function multipleOf3(text) {
  return text.length % 3 === 0;
}

function multipleOf2(text) {
  return text.length % 2 === 0;
}

function multipleJudge(text) {
  const good = multipleOf3(text);
  const bad = multipleOf2(text);

  if(good && bad) return "普通の文章";
  if(good) return "良い文章"
  if(bad) return "悪い文章";
  return "まぁまぁな文章";
}

module.exports = multipleJudge;
