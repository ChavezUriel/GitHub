'use strict';

const airLine = 'AeroMexico';
const plane = 'A320';

// retrieve characters
console.log(plane[0]);
console.log(plane[1]);

// we can acces directly to the string
console.log('hello'[0]);

// get length
console.log(airLine.length);
console.log('hello'.length);

// get idex of a char or string
console.log(airLine.indexOf('r'));
console.log(airLine.lastIndexOf('r'));
console.log(airLine.lastIndexOf('ico'));

// We can extract a part of the string with the slice method
// cuts the string starting from the position given in the argument
console.log(airLine.slice(4));
// the second atgument is the stop
console.log(airLine.slice(4, 7));
// we can use negatives to count from the end
console.log(airLine.slice(-2));
console.log(airLine.slice(4, -2));

// we can use negatives to count from the end
console.log(
  airLine.slice(airLine.lastIndexOf('M'), airLine.lastIndexOf('o') + 1)
);

// Example
const checkMiddleSeat = function (seat) {
  // B and E are middle sears
  // ABC DEF
  // get the last char
  const s = seat.slice(-1);
  if (s == 'B' || s == 'E') {
    console.log('You got a middle seat!');
  } else {
    console.log('You got lucky');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('21A');
checkMiddleSeat('4E');

// strings are not objects but we can use methods because JS behind the scenes converts the string into an object (this is called boxing) like this
console.log(new String('Uriel'));
console.log(typeof new String('Uriel'));

// Lowecase and uppercase
console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

// example checking capitalization
const passenger = 'UrIEl';
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
const passengerCorrect =
  passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();
console.log(passengerCorrect);

// example comparing emails
const email = ' Uriel_CF812@gmail.com  \n';
const loginEmail = 'uriel_cf812@gmail.com';
// we want to ignore all spaces and \n
console.log(email.toLowerCase().trim());
console.log(email.toLowerCase().trim() == loginEmail);

// replacing
const priceMX = '3050.00 MXN';
const priceFR = priceMX.replace('MXN', 'EUR').replace('.', ',');
console.log(priceFR);

const announcment = 'All passengers come to boarding door 23. Boarding door 23';

// replaces only the first appearance
console.log(announcment.replace('door', 'gate'));
// we can use replaceAll to replace all appearances
console.log(announcment.replaceAll('door', 'gate'));

// we can use regular expresions to repalce all as well
console.log(announcment.replace(/door/g, 'gate'));

const plane1 = 'A320neo';
// include
console.log(plane1.includes('20'));
// startsWith
console.log(plane1.startsWith('A320'));
// endsWith
console.log(plane1.endsWith('neo'));

// example
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board.');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, food and a pocket Knife');
checkBaggage('I have food and clothes');
checkBaggage('I have clothes and a gun for protection');

// split
console.log('a+very+nice+string'.split('+'));
console.log('Uriel Chávez'.split(' '));
const [firstName, lastName] = 'Uriel Chávez'.split(' ');

// join
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  let namesCapitalized = [];
  for (const n of names) {
    namesCapitalized.push(capitalizeString(n));
  }
  console.log(namesCapitalized.join(' '));
};
const capitalizeString = function (string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
};

const passenger2 = 'Jessica Ann Smith Davis';

capitalizeName(passenger2);
capitalizeName('uriel cHAVEZ FlORES');

// PADDING
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('Uriel'.padStart(25, '+'));
console.log(message.padEnd(25, '+'));
console.log('Uriel'.padEnd(25, '+'));
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Uriel'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  // converting to string
  const str = number + '';
  console.log(str.slice(-4).padStart(str.length, '*'));
};
maskCreditCard(124532423);
maskCreditCard('1242453464532423');

// repeat
const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(4));
