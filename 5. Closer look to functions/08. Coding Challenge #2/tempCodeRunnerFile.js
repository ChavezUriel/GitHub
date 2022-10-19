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
