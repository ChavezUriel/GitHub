'use strict';

// Sets
// a collection of unique values, cant store duplicates

// recives as argument an iterable

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);

// works like unique function in pyhton, but it is a data structure

// strings are iterables as well
console.log(new Set('Uriel'));

// get size
console.log(orderSet.size);

// check if an element is contained (like include method for arrays)
console.log(orderSet.has('Pasta'));
console.log(orderSet.has('Bread'));

// add and delete elements
orderSet.add('Garlic Bread');
orderSet.delete('Pizza');
console.log(orderSet);

// in sets there is no indexes
// thats why (there is no order and no duplicates) we cant retrieve values from a set
// we can only verify if an element is contained in the set

// but sets are iterables
console.log('Iterable:');
for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// if we want to know the unique staff positions
const staffUnique = new Set(staff);
console.log(staffUnique);
// If we want them in an array
const staffUnique2 = [...new Set(staff)];
console.log(staffUnique2);
// If wanted only the quantity
console.log(staffUnique.size);
// how many different letters are in a string
console.log(new Set('Uriel Chávez Flores').size);
