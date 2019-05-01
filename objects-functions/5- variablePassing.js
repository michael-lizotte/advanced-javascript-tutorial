/**
 * Passing by value or by reference
 * 
 * [By VALUE]
 * 
 * [Primitive Value] a : [Address] 0x001 : [Value] 3
 * [Primitive Value] b = a : [Address] 0x002 : [Value] 3
 * 
 * 'b' copies the value of 'a' in a separate address (0x002)
 * 
 * [By REFERENCE]
 * 
 * [Object] a : [Address] 0x001
 * [Object] b = a : [Address] 0x001
 * 
 * 'b' doesn't copy the value of 'a', it just uses the same address as 'a'
 */
var a = 3
var b

b = a // <-- By value since both 'a' and 'b' are primitives
a = 2 // <-- Doesn't impact the value of 'b'

console.log(`a: ${a}\nb: ${b}`)

var c = { greeting: 'hi' }
var d

d = c // <-- By reference since 'c' is an object (same with function)
/**
 * Mutate: To change something
 * 
 * 'immutable' means it can't be changed
 */
c.greeting = 'hello' // Mutates the value of 'c' **Will impact 'd'**
console.log(`c: ${c.greeting}\nd: ${d.greeting}`)

// By reference, even when passed as a parameter
function changeGreeting(obj) {
  obj.greeting = 'Hola' // Still mutates the object
}

changeGreeting(d)
console.log(`c: ${c.greeting}\nd: ${d.greeting}`)

// The equals operator sets up a new memory space
c = { greeting: 'howdy' } // Immutability
console.log(`c: ${c.greeting}\nd: ${d.greeting}`)