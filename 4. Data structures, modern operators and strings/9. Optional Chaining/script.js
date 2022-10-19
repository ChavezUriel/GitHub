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

// if we dont know if the restaurants open in monday we would do this
console.log(restaurant.openingHours.mon);
// console.log(restaurant.openingHours.mon.open); error

// we would have to do this
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// if we dont even know if openinHours exists, then it would be
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// optional chaining returns undefined if the asked property doesnt exist
console.log(restaurant.openingHours.mon?.open);

// checking openingHours existance too
console.log(restaurant.openingHours?.mon?.open);

// example
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of weekdays) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
}

// optional chaining also works on methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist.');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist.');

// and optional chaining also works on arrays
const users1 = [{ name: 'Uriel', email: 'chavezfu2018@licifug.ugto.mx' }];
const users2 = [];

// check if an array is empty
console.log(users1[0]?.name ?? 'User array empty');
console.log(users2[0]?.name ?? 'User array empty');
