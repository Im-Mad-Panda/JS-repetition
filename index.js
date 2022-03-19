function getMultypTable() {
  const table = {};
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      table[`${i} * ${j}`] = i * j;
    }
  }
  return table;
}
getMultypTable();
console.log(getMultypTable());
