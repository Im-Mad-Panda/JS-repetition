// let count = 0;

// while(count++ < 10){
//   console.log(count)
// }

//-----------

// const GOOD_PASSWORD = "qwerty123";

// let count = 0;
// const MAX_TRY = 5;

// while (count++ < MAX_TRY) {

//   let password = prompt("Введите пароль:");

//   if (password === GOOD_PASSWORD) {
//     break;
//   }
// }
// console.log("password good");

//------------

// let count = 0;
// const MAX_TRY = 5;

// do{
//   console.log('Do' + count);
// }while(count++ < MAX_TRY)

// console.log("password good");

//------------

// for(инициализация; условие; изменение на каждом шаге итерации){

// }

// const GOOD_PASSWORD = "qwerty123";
// const MAX_TRY = 5;
// for (i = 0; i < MAX_TRY; i++) {
//     let password = prompt("Введите пароль:");
//     if (password === GOOD_PASSWORD) {
//         break;
//     }
// }
// console.log("password good");

//------------

// while(count < 10){
//   if(++count % 2 === 1){
//     continue;
//   }
//   console.log(count);
// }

// console.log('END OF SCRIPT');

//------------

function factorial(a) {

let result = 1;

  for (i = 1; i <= a; i++) {
    result = result * i;
  }
  return result;
}

const res = factorial(5);
console.log(res);
