let number1 = +prompt("Число 1");
let number2 = +prompt("Число 2");
let mode = prompt("Выберите операцию: +, -, *, /");

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

let f;

switch (mode) {
  case "+":
    f = sum;
    break;
  case "-":
    f = sub;
    break;
  case "*":
    f = mult;
    break;
  case "/":
    f = div;
    break;
}

if (typeof f === "function") {
  const result = f(number1, number2);
  console.log(result);
} else {
  console.log("ooops!");
  return null;
}
