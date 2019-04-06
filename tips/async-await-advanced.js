/**
 * Nodejs Event-Loop
 * 
 * The first loop will execute synchronous part of the application on the main loop.
 * 
 * If nodejs comes across a Promise, setTimeout or any async code, it'll put that code
 * into the event loop to execute it later.
 * 
 * Events are split into 2 categories: 
 *  1. Macrotasks (setTimeout, setInterval)
 *  2. Microtasks (Promise)
 * 
 * If the event is a macrotask, nodejs will execute the code at the start of the
 * next event-loop.
 * If the event is a microtask, nodejs will execute the code BEFORE the start of the next
 * event loop.
 */

const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

//  console.log('🍔 Synchronous 1');

//  setTimeout(_ => console.log(`🍊 Timeout 2`), 0);

//  /**
//   * Even thought the setTimeout function was pushed on the event queu before the Promise,
//   * the promise will resolve FIRST on the event loop because it has a 'higher' priority
//   */
//  Promise.resolve().then(_ => console.log(`🍐 Promise`));

//  console.log('🍔 Synchronous 4');

// Basic
/**
 * By using the async keyword, nodejs will ensure that the return value of the
 * function is a Promise. The async keyword also provides the 'await' keyword,
 * since it creates a new context for that function and wraps it into it.
 */

fruits = ['peach', 'pineapple', 'strawberry']

const getFruit = async(name) => {
  const fruits = {
    pineapple:  '🍍',
    peach:      '🍑',
    strawberry: '🍓'
  }

  let i = 0
  while(i < 100000000) { i++ }
  
  return fruits[name];
}

const makeSmoothis = async() => {
  // const a = await getFruit('pineapple');
  // const b = await getFruit('strawberry');

  // return [a, b]
  
  // Good to know that there is ONE loop for promise (don't block it with spin-waiting)
  const a = getFruit('pineapple');
  const b = getFruit('strawberry');

  const smoothie = await Promise.all([a, b])
  return smoothie
}

// const smoothie = fruits.map(async v => {
//   const emoji = await getFruit(v)
//   log(emoji)
//   return emoji
// })

const smoothie = fruits.map(v => getFruit(v))

const fruitLoop = async() => {
  for await (const emoji of smoothie) {
    log(emoji)
  }
}

makeSmoothis().then(log)