'use strict';
console.log(this);

const calcAge = function (birhtYear) {
  console.log(2037 - birhtYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birhtYear => {
  console.log(2037 - birhtYear);
  console.log(this);
};

calcAgeArrow(1996);

const uriel = {
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

uriel.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = uriel.calcAge;

console.log(matilda);

matilda.calcAge();

const f = uriel.calcAge;
f();
