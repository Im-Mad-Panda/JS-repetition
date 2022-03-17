const cat = {
  name: "Barsik",
  age: 4,
  color: "ginger",
  weight: 5,
  breed: "Cheshirkiy",
  isNale: true,
  isSleeping: false,
  run: function () { //run - метод
    return "I am running";
  },
  sleep: function () {
    return "Zzzz...";
  },
  meow: function () {
    return "Meowww!";
  },
};

const res = cat.run(); // вызов функции
alert(res);

cat.age = cat.age + 1; //cat.age++

alert(cat.age); // read

delete cat.isSleeping; // delete

// cat.isSleeping = undefined;

cat.girlFriend = "Murka";
