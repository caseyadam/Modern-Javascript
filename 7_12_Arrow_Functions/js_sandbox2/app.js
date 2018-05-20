// const sayHello = function() {
//   console.log('Hello');
// }

// const sayHello = () => {
//   console.log('Hello');
// }

// One line functions do not need braces
// const sayHello = () => console.log('Hello');

// One line returns
// const sayHello = () => 'Hello';

// Same as above
// const sayHello = function() {
//   return 'Hello';
// }

// Return object literal
// This is problematic because it returns as a function body, not a function literal if you don't wrap in parenthesis.
// const sayHello = () => ({ msg: 'Hello' });

// Single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// Multuiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Brad', 'Traversy');

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// Shorter version
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// Shortest version
const nameLengths = users.map(name => name.length);

console.log(nameLengths);
