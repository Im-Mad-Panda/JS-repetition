function Worker(name, age, rate, days) {
  this.name = name;
  this.age = age;
  this.rate = rate;
  this.days = days;

  this.getSalary = function () {
    if (isNaN(this.days) || isNaN(this.rate))  {
      return false;
    }
    if(this.days > 31){
      return null;
    }
    return this.rate * this.days;
  }
}

const worker1 = new Worker("Ray", 35, 6000, 30);
console.log(worker1);
