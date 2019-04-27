/**
 * First class functions: Everything you can do with other types, you can do
 *  with functions.
 * 
 * Assign them to variables, pass them around, create them on the fly, etc.
 * 
 * Every functions is a special type of object. You can attach properties to
 * it, attach other functions or even other objects to it. They all have 
 * common properties:
 *  Name: optional (anonymous functions)
 *  Code: mandatory (to code to execute when the function is called)
 */

function greet() {
  console.log('Hi')
}

greet.language = 'english' // <-- wtf .. :\
//  console.log(greet)

/**
* ============================================================
*             Function statements and expressions
* ============================================================
* 
* An expression is a unit of code that results in a value. It doesn't have
* to save a variable.
*/
var a
a = 3 // <-- Expression (returns 3 since the equal 
      //       operator returns the result of the assignment)
1 + 2

// 'if' is a statement because it DOESN'T return a value
// var b = if (a === 3) is an invalid code
if (a === 3) {
}

/**
 * The 'function' keyword is a statement since it doesn't return any values.
 * Also, the javascript engine will 'hoist' it, making it available to use
 * BEFORE it is declared (the engine will create the function before any
 * execution of the code and store it in memory)
 */
greet() // <-- Can be used before the function declaration

/**
 * properties:
 *  Name: greet
 *  Code: 'console.log('hi')'
 */
function greet() {
  console.log('[greet] hi')
}

/**
 * Function expression since it returns a value that we can assign
 * to a variable. This function declaration is NOT hoisted, therefore
 * it's NOT put in memory before code execution.
 * 
 * **Variables are NEVER hoisted**
 * 
 * Properties:
 *  Name: (anonymous)
 *  Code: 'console.log('hi')'
 */

// anonymousGreet() <-- Will crash

var anonymousGreet = function() {
  console.log('[anonymousGreet] hi')
}

anonymousGreet() // <-- Cannot be called before it's assigned

/**
 * Example
 */
function log(a) {
  a()
}

log(function() {
  console.log('[log] hi')
}) // <-- Function argument