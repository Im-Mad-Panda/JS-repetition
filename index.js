"user strict";

const driver1 = {
  name: "First",
};

const driver2 = {
  name: "Second",
};

const car = {
  go: function () {
    return `${this.name} в машине`;
  },
};
driver1.__proto__ = car;
driver2.__proto__ = car;



function Forestier() {
  this.value = 0;
  this.up = function () {
    this.value++;
    return this;
  };
  this.down = function () {
    this.value--;
    return this;
  };
  this.showStep = function () {
    return this.value;
  };
}

const forestier = new Forestier();
