const foo = { name : 'tom', age : 30, nervous : false }
const bar = { name : 'dick', age : 40, nervous : false }
const baz = { name : 'harry', age : 50, nervous : true }

'Bad Code 💩'

// console.log(foo)
// console.log(bar)
// console.log(baz)

'Good Code ✅'

// Prints the name of the variable
// console.log({ foo, bar, baz })
// console.log('%c My Friends', 'color: orange; font-weight: bold;') // Custom CSS when debugging in a browser

// Will only print in a browser
// console.table([foo, bar, baz])

// Used to benchmark
// console.time('looper')

// let i = 0
// while(i < 1000000) { i++ }

// console.timeEnd('looper')

// Print a stack trace for the method call
const deleteMe = () => console.trace('bye bye database')
deleteMe()
deleteMe()