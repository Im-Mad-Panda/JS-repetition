// const userNumber = Number(prompt("Please, enter a number 1"));
// const userNumber2 = Number(prompt("Please, enter a number 2"));

// const getMaxAndMin = function (numbe1, numbe2) {
//   if (numbe1 > numbe2) {
//     console.log (numbe1;
//   } else {
//     console.log (numbe2;
//   }
// };

// const numbers = getMaxAndMin(userNumber, userNumber2);
// alert(numbers + ' - больше');

// ------------

// const userNumber = Number(prompt("Введите число:"));

// const isEven = function(num){
//         console.log (num % 2 === 0;
// }

// const remainderofthenumber = isEven(userNumber);
// alert(remainderofthenumber);

// ------------

// const userTimesOfDay = Number(prompt("Введите время суток:"));

// const TimesOfDay = function(hour) {
//   let theme = (hour >= 9 && 17 <= hour) ? 'light' : 'dark';
// console.log (theme;
// }
// const Times = TimesOfDay(userTimesOfDay);
// alert(Times);

// ------------

// const hour = 12;
// debugger;
//   let theme = (hour >= 9 && 17 <= hour) ? 'light' : 'dark';
//   console.log((theme);

// ------------

// let number = Number(prompt("Введите число"));
// const numbers = function (num) {
//   let result = isNaN(num) ? "некоректное число" :  "все хорошо";
//   console.log (result;
// };
// const Times = numbers(number);
// alert(Times);

// ------------

// let number = Number(prompt("Введите число:"));
// const numbers = function (num) {
//   if (isNaN(num)) {
//     console.log ("Некоректное число";
//   } else if (num % 5 === 0) {
//     console.log ("делиться на 5";
//   } else if (num % 3 === 0) {
//     console.log ("делиться на 3";
//   } else if (num % 2 === 0) {
//         console.log ("делиться на 2";
//   }else {
//         console.log ("не делиться не на 5 не на 3 не на 2!";
//   }
// };
// const Times = numbers(number);
// alert(Times);

// ------------

let userInput = prompt(
  "Выберите позицию меню: \n 1 - Чай \n 2 - Кофе \n 3 - Сок \n 4 - Лимонад \n 5 - Вода"
);

switch (userInput) {
  case "1":
    console.log("Вот ваш чай");
    break;
  case "2":
    console.log("Вот ваш кофе");
    break;
  case "3":
    console.log("Вот ваш сок");
    break;
  case "4":
    console.log("Вот ваш лимонад");
    break;
  case "5":
    console.log("Вот ваша вода");
    break;
  default:
    console.log("Такого у нас нет");
}
