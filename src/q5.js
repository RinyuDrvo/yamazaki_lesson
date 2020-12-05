const array = ['aa','bb','cc','dd','ee','ff','gg', 'dd'];
const searchElement = ['dd', 'ee', 'ff'];

// 位置の特定
const index = searchElement.map(v => {
  const indices = [];
  let idx = array.indexOf(v);
  while(idx != -1) {
    indices.push(idx);
    idx = array.indexOf(v, idx + 1);
  }
  return indices;
})

// 位置の配列を取り出す
const hoge = index.flat().map(v => {
  return array[v]
})
