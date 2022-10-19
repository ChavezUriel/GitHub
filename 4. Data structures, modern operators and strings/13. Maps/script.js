'use strict';

// maps are as objects but the name keys can be any varable type

// we can create an empty map and fill it after
const rest = new Map();
// works like add
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest);

// the set method returns the updated map, so we can use againa another method
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian'])
  .set('Open', 12)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// with the boolean keys we can do things like these
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// check if a key exists
console.log(rest.has('categories'));

// delete keys
console.log(rest.get(2));
rest.delete(2);
// when it doesnt exist it returns undefined
console.log(rest.get(2));
console.log(rest);
console.log(rest.size);

// to clear a map
rest.clear();
console.log(rest.size);

// if we want to use an array as keys we should be carefull
rest.set([1, 2], 'Test');
console.log(rest.get([1, 2]));
// the array [1,2] which is the key is different from any array we write as [1,2] because it is a diferent object in the heap

// if we wanted to work we should do this
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));
// now arr refers to the same place in memory

// example with real object
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
// we select indeed the object refering to the heading in the html file

// Maps iteration

// other way to create maps
const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);
console.log(question);

// when using bject.entries it returns an array of arrays like the one we wrote above
// we can convert from object to map with this method
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const openingHoursMap = new Map(Object.entries(openingHours));
console.log(openingHoursMap);

// maps are iterables, objects are not
let printPrompt = '';
for (const [key, value] of question) {
  if (typeof key === 'number') {
    printPrompt += `Answer ${key}: ${value}` + '\n';
  } else if (key == 'question') {
    printPrompt += value + '\n';
  }
}
printPrompt = printPrompt.slice(0, -2);

// const answer = Number(prompt(printPrompt));
// if (typeof answer === 'number') {
//   console.log(question.get(answer === question.get('correct')));
// }
// console.log(answer);

// we can convert a map to an array
console.log([...question]);

// and we can retrieve data from maps with these methods
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
