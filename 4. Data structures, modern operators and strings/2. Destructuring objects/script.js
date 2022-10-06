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
};

// we need the names of the properties to extract them from an object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// if we want the variable names different from the propertiy names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// this is usefull to recive 3rd party data or info

// we can set as well default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// usefull when we dont know how data looks like

// mutating variables
let a = 111;
let b = 222;
const obj = { a: 23, b: 7, c: 14 };
// this doesnt work
// {a,b} = obj;
({ a, b } = obj);
console.log(a, b);

// nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// we can assign new names
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// practical application for functions recieving third party data structures
// checkout the function orderDelivery in the object at the beginning of the script

// we pass 1 object as argument and in the function it is destructured
console.log(
  restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
  })
);

// there can be as well defaults in the destructuring of the recieving object of the function
console.log(
  restaurant.orderDelivery({
    address: 'Via del Sole, 21',
  })
);
