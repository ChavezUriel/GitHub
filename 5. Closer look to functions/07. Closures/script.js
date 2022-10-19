'use strict';

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

// we created the function stored in booker inside another function with its own enviroment which is deleted from the call stack once the booker function was returned
// the problem here is that the function returned uses a variable living in tge secureBooking function

booker();
booker();
booker();

// but it can still use that variable even when the secureBooking function's enviroment was deleted from the callstack

// the reason is that every function has acces (its sticked to it, it will be carried with the function during its existance) to its parent scope enviroment

// the closure has priority over de scope chain, if there was a global passengerCount variable, the one which will be considering the function booker is the one in the closure

// we cant get the variable in the closure but we can obseve it

console.dir(booker);

// more closure situations

// EXAMPLE 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a);
  };
};

g();
f();

const h = function () {
  const b = 21;
  f = function () {
    console.log(b);
  };
};

h();
f();

// EXAMPLE 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

// 3 seconds after the boardPassengers scope was closed, the print with perGroup and n variables happened well
boardPassengers(180, 3);
