function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

// Callback - функция как арумент переданая другой функции.
// Функция высшего порядка.


function highOrderFunction(num1, num2, functionToPerform){
  return functionToPerform(num1, num2);
}

const res = highOrderFunction(3, 4, sum);
console.log(res);
