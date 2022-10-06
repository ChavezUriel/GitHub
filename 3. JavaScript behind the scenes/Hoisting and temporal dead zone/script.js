'use strict';

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'Teacher';
const year = 1991;

console.log(me);

console.log(add1(1, 0));
// console.log(add2(1, 1));
// console.log(add3(1, 2));
// console.log(add4(1, 3));

function add1(a, b) {
  return a + b;
}

const add2 = function (a, b) {
  return a + b;
};

const add3 = (a, b) => a + b;

var add4 = function (a, b) {
  return a + b;
};
