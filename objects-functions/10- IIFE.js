/**
 * IIFE stand for Immediately invoked function expressions
 */

// Function statement (doesn't return a value)
function greet(name) {
  console.log(`Hello ${name}`)
}
greet('statement')

// Function expression (returns a value)
var greetFunc = function(name) {
  console.log(`Hello ${name}`)
}
greetFunc('expression')

// 'greeting' will be the return value of the function expression
var greeting = function(name) {
  return `Hello ${name}`
}('iife'); // <-- IIFE since it's executed immediately after its creation

console.log(greeting)

console.log('========================')

3; // <-- Valid javascript expression
{
  name: 'John'
  lastname: 'Doe'
}; // <-- Also valid

// Doesn't work :(
// function(name) {
//   return `Hello ${name}`
// }('Doe');
(function(name) {
  console.log(`Hello ${name}`)
}('John')) // <-- Valid