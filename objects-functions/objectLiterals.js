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