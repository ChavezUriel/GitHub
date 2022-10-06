'use strict';

const uriel = {
  firstName: 'Uriel',
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
uriel.greet();
