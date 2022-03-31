"user strict";

function getAverage(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

const array = [2, 3, 4, 5, 6, 7];
console.log(getAverage(array));
