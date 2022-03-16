function factorial(number) {

if(isNaN(number)){
  return false
}

if(number === 1 || number === 0){
  return 1;
}

const MAX_NUM = 250;

if(number > MAX_NUM){
  return false;
}

  let result = 1n;

  for (let i = 1; i <= number; i++) {
      result *= BigInt(i); // result = result * i
  }
  return result;
}
let res = factorial(20);
console.log(res);