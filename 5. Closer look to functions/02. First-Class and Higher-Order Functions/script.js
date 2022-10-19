'use strict';

// higher order functions are the ones which recieve as an argument or returns a funciton
// First order functions are the standard ones, no functions as arguments or return

// first order functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher order function (recieves functions as an argument)
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// two more examples on callback functions used in javascript
const high5 = function () {
  console.log('🖐️');
};
document.body.addEventListener('click', high5);
['Uriel', 'Awa', 'Martha'].forEach(high5);

// higher order function (returns functions)
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Uriel');
greeterHey('Carlos');

// we can call it immediately
greet('Hello')('Uriel');

// little challenge: rewrite greet function with arrow functions

const greet2 = greeting => name => console.log(`${greeting} ${name}`);
greet2('Hello')('Uriel');
greet2('Hey')('Uriel');
