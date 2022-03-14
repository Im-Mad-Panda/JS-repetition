// let count = 0;

// while(count++ < 10){
//   console.log(count)
// }


//-----------


const GOOD_PASSWORD = "qwerty123";

let count = 0;
const MAX_TRY = 5;

while (count++ < MAX_TRY) {

  let password = prompt("Введите пароль:");

  if (password === GOOD_PASSWORD) {
    break;
  }
}
console.log("password good");


//------------



// while(count < 10){
//   if(++count % 2 === 1){
//     continue;
//   }
//   console.log(count);
// }

// console.log('END OF SCRIPT');
