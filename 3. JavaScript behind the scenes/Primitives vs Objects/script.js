'use strict';

let age = 21;
let oldAge = age;
age = 22;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Uriel',
  age: 21,
  family: ['Elda', 'Rafael', 'Daniel', 'Valeria'],
};

const friend = me;
friend.age = 23;

console.log('Friend:', friend);
console.log('Me:', me);

// Copy objects (shallow copy)

const friend2 = Object.assign({}, me);

friend2.name = 'Carlos';
friend2.age = 22;

friend2.family.push('Javier');

console.log('Friend:', friend2);
console.log('Me:', me);
