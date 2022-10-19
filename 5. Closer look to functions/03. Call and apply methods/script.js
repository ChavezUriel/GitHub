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

lufthansa.book(545, 'Uriel');
lufthansa.book(691, 'Samuel');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// we can copy a method into an outside function
const book = lufthansa.book;

// but it contains this keyword
// this keyword is undefined here
// book(23, 'Sarah Williams');

// if we want to use this function on the new airline object we should tell JS what object to point to when running the function
book.call(eurowings, 23, 'Sarah');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 326, 'Mary Cooper');
console.log(swiss);

// we can use as well apply method
const flightData = [592, 'George'];
book.apply(swiss, flightData);
// the same can be achieved with
book.call(swiss, ...flightData);
console.log(swiss);

//
