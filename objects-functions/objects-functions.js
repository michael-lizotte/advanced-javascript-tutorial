/**
 * Objects have Primitive "properties", Object "properties" and Function "method"
 * 
 * Every objects will be assign an address in the computer's memory, but also its properties
 */

var object1 = {
  x: 3,
  object2: {
    y: 4,
    z: 5,
    function2: (x) => {
      console.log(`function2: ${x}`)
    }
  },
  function1: function() {
    console.log('function1')
  }
}

/**
 * Objects can be assigned new properties dynamically
 */
object1['newValue'] = 'NEW_VALUE'

var newValueProperty = 'newValue'
console.log(object1)
console.log(object1[newValueProperty]) // Dynamic property finding

console.log(object1.x) // <-- Dot operator (2nd in operator priority)

object1.newObject = new Object()
object1.newObject.test = 'test'
object1.newObject.test2 = 1234
object1.newObject.deepObject = new Object()

/** 2 ways of accessing object properties (dot is prefered) */
console.log(object1.newObject)
console.log(object1['newObject']['test'])