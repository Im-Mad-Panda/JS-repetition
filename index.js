function User(name, surname, fullName, weight, age){
  this.name = name;
  this.surname = surname;
  this.fullName = fullName;
  this.weight = weight;
  this.age = age;
}

const user = new User("Марк", "Ray", "Ведмедев Марк Сергеевич", 75, 30);
console.log(user);