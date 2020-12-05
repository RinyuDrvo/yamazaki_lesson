const a = 'rinyu';

function multipleOf3(text) {
  return text.length % 3 === 0;
}

function multipleOf2(text) {
  return text.length % 2 === 0;
}

module.export = function(text) {
  const good = multipleOf3(text);
  const bad = multipleOf2(text);

  if(good && bad) return "普通の文章";
  if(good) return "良い文章" 
  if(bad) return "悪い文章";
  return "まぁまぁな文章";
}
