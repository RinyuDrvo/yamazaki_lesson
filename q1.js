const a = 'rinyu';

function multipleOf3(text) {
  return text.length % 3 === 0;
}

function multipleOf2(text) {
  return text.length % 2 === 0;
}

function judge(text) {
  const good = multipleOf3(text);
  const bad = multipleOf2(text);

  if(good && bad) return "まぁまぁな文章";
  good ? "良い文章" : "悪い文章";
}

console.log(judge(text));
