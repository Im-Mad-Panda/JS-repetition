let userName = prompt("Введите имя:");

let getName = function(name) {
  let theme = (name) ? 'Привет, ' + name : 'Привет Аноним!';
  return theme;
}

const result = getName(userName);
alert(result);