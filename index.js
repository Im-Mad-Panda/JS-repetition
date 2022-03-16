function sumEvenNumbers(from, to) {
  let sum = 0;

  for (let i = from; i <= to; i++) {
    if (i % 2 === 0) {
      sum += i; // sum = sum + i
    }
  }
  return sum;
}
let res = sumEvenNumbers(4,10);
console.log(res);