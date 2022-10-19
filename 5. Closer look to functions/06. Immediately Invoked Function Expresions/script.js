'use strict';

const runOnce = function () {
  console.log('This will never run again.');
};
runOnce();

// IIFE
// (function)();
(function () {
  console.log('This will never run again.');
})();

// for arrow function
(() => console.log('This will never run again.'))();

// this was invented to manage private variables in this kind of function scopes

(function () {
  // console.log('This will never run again.');
  const isPrivate = 222;
})();
// console.log(isPrivate);

{
  const isPrivate = 22;
  var isPrivate2 = 22;
}
// console.log(isPrivate);
console.log(isPrivate2);
