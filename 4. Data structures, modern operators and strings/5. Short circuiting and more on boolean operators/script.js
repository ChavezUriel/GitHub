'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order revieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(`${mainIngredient} with ${otherIngredient}`);
  },
};

// boolean operators can use any datatypes or return any data type and do short-circuiting

console.log('-----OR-----');

// using and returning a non boolean
console.log(3 || 'uriel');
// short circuiting on or: if the first value is a thruty value then it returns the first (wont even look to the second one)

// more examples on or
console.log('' || 'uriel');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'hola');

// if we want to check if something exists and asign a default if not
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// we can achive the same with this (but the default cant be a falsy value)
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-----AND-----');
// works the exactly opposite way of OR
console.log(0 && 'Uriel');
console.log(7 && 'Uriel');
console.log('hello' && null && 7 && 'Uriel');
console.log(45 && 'ho' && 1 && 0 && 'Uriel');

// checkong if a method exists before using
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// can be achieved with
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

console.log('-----NULLISH COALESCING OPERATOR-----');
// we saw that we couldnt use the short circuiting with or to set a default value if the value we was checking was 0
restaurant.numGuests = 0;
const guests3 = restaurant.numGuests || 10;
console.log(guests3);

const guests4 = restaurant.numGuests ?? 10;
console.log(guests4);

// works with the concept of nullish values instead of falsy values
// falsy values: 0, "", null and undefined
// nullish values: null and undefined

console.log('-----LOGICAL ASIGNMENT OPERATOR-----');
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// we want to set a default number of guests to the objects that dont have that attribute
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// console.log(rest1.numGuests);
// console.log(rest2.numGuests);

// the OR ASSIGNMENT OPERATOR can simplify this
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log(rest1.numGuests);
// console.log(rest2.numGuests);
// but it doesnt works when the value is 0 (it is falsy)

// to solve it we can use the NULLISH ASSIGNMENT OPERATOR
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1.numGuests);
console.log(rest2.numGuests);

// we have as well the AND ASSINGMENT OPERATOR
// if we want to anonymize the owner if it exists in an object
// if it doesnt exists we leave it as it
rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
