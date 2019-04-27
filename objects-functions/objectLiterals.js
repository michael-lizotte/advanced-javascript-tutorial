// var person = new Object()
// person.firstname = 'Tony'
// person.lastname = 'Alicea'

var Tony = {
  firstname: 'Tony', 
  lastname: 'Alicea',
  address: {
    street: '111 Main St.',
    city: 'New York',
    state: 'NY'
  }
} // <-- Object literal creation

function greet(person) {
  console.log(`Hi ${person.firstname}`)
}

greet(Tony)

greet({
  firstname: 'Mary',
  lastname: 'Doe'
}) // On the fly object creation with object literals

Tony.address2 = {
  street: '333 Second St.',
  city: 'New York',
  state: 'NY'
}

console.log(Tony)

/**
 * Json --> JavaScript Object Notation
 * 
 * To send data over the internet, we used to send XML formatted data:
 * <object>
 *  <firstname>Mary</firstname>
 *  <isAProgrammer>true</isAProgrammer>
 * </object>
 * 
 * But, for each property, we sent the property name twice (opening and 
 * closing tag), which is a waste of bandwidth.
 * 
 * Json got rid of that using this notation:
 * {
 *  "firstname": "Mary", // <-- properties have to be wrapped in quotes
 *  "isAProgrammer": true
 * }
 */
var objectLiteral = {
  firstname: 'Many',
  isAProgrammer: true
}

// Converts Javascript objects to JSON
console.log(JSON.stringify(objectLiteral))

