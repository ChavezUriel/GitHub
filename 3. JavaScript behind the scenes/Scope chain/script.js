'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `You are ${age}, born in ${birthYear}.`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'Uriel';
      output = 'new output';
      var millenial = true;
      const str = `Oh, and you are a millenial, ${firstName}.`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      console.log(add(1, 1));
    }
    // console.log(add(2, 1));
    console.log(output);
  }
  printAge();
  console.log(firstName);
  return age;
}

const firstName = 'Jonas';
calcAge(1991);

// printAge();
