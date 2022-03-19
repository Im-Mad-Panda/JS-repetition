function Cat(name, age, breed, color, isMale){
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.color = color;
  this.isMale = isMale;
}

const cat1 = new Cat('Barsik', 5, 'British', 'blue', true);
const cat2 = new Cat('Murka', 3, 'British', 'blue', false);


cat1.girlfriend = cat2;

cat1.girlfriend.name // или cat1.girlfriend['name']