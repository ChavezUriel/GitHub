'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  // standard default parameter
  numPassengers = 1,
  // calculate the default with a previous parameter
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 3);
// Skip parameter
createBooking('LH123', undefined, 1000);

const flight = 'LA234';
const uriel = {
  name: 'Uriel Chávez Flores',
  passport: 49840230202,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 49840230202) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, uriel);
// the function recieves a copy of the arguments
console.log(flight);
// when recieving an object, the function recieves the direction in the memory heap to that object, so it affects the outside objects
console.log(uriel);

// example function that affecting the object outside
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(uriel);
checkIn(flight, uriel);

// in javascript all argument passing is pass by value
// but objects are in fact a reference to the memory
// thats why it seems like pass by reference
