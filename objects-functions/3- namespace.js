/**
 * Namespace: a container for variables and functions
 * 
 * Typically to keep variables and functions with the same namespace
 */

var greet = 'Hello!'
var greet = 'Hola!' // <-- Overrides the first statement

console.log(greet)

/**
 * Both of these objects are containers for the greet string variable
 * 
 * Still need to make sure that there is no namespace collision, otherwise
 * it could still be possible to overwrite functions and variables
 */
var english = {
  greet: 'Hello!'
}

var spanish = {
  greet: 'Hola!'
}

console.log(english, spanish)