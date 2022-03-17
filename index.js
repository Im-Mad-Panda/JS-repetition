function Car(name, maxSpeed) {
  this.name = name;
  this.maxSpeed = maxSpeed;
  this.speed = 0;

  this.accelerate = function (value) {
    if (value < 0) {
      return false;
    }
    this.speed = this.speed + value;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
      return this.speed;
    }
    return this.speed;
  };

  this.deaccelerate = function (value) {
    if (value < 0) {
      return false;
    }
    this.speed = this.speed - value;
    if (this.speed < 0) {
      this.speed = 0;
      return this.speed;
    }
    return this.speed;
  }

  this.stop = function () {
    return (this.speed = 0)
  }
}

const blueCar = new Car("VW", 300);
console.log(blueCar);
