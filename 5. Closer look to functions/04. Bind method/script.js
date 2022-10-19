'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const book = lufthansa.book;

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

// bind returns a new function chainging the this keyword to an specific object
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(522, 'Steven');
bookLH(522, 'Steven');
bookLX(522, 'Steven');

// partial application
// we can set fixed arguments on bind method
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Uriel');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// this way the this keyword will refer to the buton
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// this way it points to lufthansa object
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
// we dont have to point to an object, there is no this key word
const addIVA = addTax.bind(null, 0.16);
console.log(addIVA(100));
