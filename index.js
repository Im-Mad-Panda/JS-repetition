"use strict";

function drowSquareWithDiagonal (dimension, drowSymbol){

  let str = '';

  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++){
    if(i === 0 || i === (dimension - 1) || j === 0 || j === (dimension - 1) || i === j){
    str+= drowSymbol;
    } else {
    str += ' ';
  }
}
  str += '\n';
  }
return str;
}

console.log(drowSquareWithDiagonal(10, '*'));