/**
 * The 'arguments' variable is the old way of fetching parameters. It contains
 * a list of all the values/parameters in a function parameter
 * 
 * The new way is the spread syntax
 */

function greet(firstname, lastname, language, ...others) {
  /**
   * 'undefined' is equal to false
   */
  language = language || 'EN'

  console.log(`${firstname} ${lastname} [${language}]`)
  // List of arguments, not used in es6
  console.log(`${arguments}`)
  console.log(`${others}`)
  console.log('==================================')
}

greet()
greet('John')
greet('John', 'Doe')
greet('John', 'Doe', 'FR')
greet('John', 'Doe', 'FR', '111 Main St.', 'Chicago')