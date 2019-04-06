// const fetch = require('node-fetch')

// const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')

// promise
//   .then(res => res.json())
//   .then(user => {
//     throw new Error('uh oh'); // It will bypass every other callbacks
//   })
//   .then(user => console.log('😀', user.title))
//   .catch(err => console.error('😭', err))

// console.log('🍔 Synchronous')

const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

const codeBlocker = () => {
  // let i = 0;
  // while(i < 1000000000) { i++ }
  // return `🐷 billion loops done`;

  /**
   * This code, even though it's wrapped in a Promise, will still block the event loop.
   */
  // return new Promise((resolve, reject) => {
  //   let i = 0;
  //   while(i < 1000000000) { i++ }
  //   resolve(`🐷 billion loops done`)
  // })
  /**
   * Another trick to be sure that the code won't affect the main loop is to wrap
   * the code inside a RESOLVED promise
   */
  return Promise.resolve().then(v => {
    let i = 0;
    while (i < 1000000000) { i++ }
    return `🐷 billion loops done`
  })
}

log('🍔 Synchronous 1')
codeBlocker().then(log)
log('🍔 Synchronous 2')
