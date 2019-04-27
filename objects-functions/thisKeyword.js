/**
 * When a function is invoked, a new Execution Context is created
 * 
 * Every context has some variables in the environment, and also a reference
 * to it's outer environment.
 * 
 * It also creates a new variable called 'this', which will point to an 
 * object (sometimes different depending on how the function is called).
 */
function a() {
  console.log(this) // 'this' points to the global 'this'
}

var b = function() {
  console.log(this) // Same thing as 'a'
}

var c = {
  name: 'The c object',
  log: function() {
    var self = this // Work-around to fix 'this'
    /**
     * When an object has a method, calling 'this' inside of it
     * will reference to the object that has the method
     */
    //this.name = 'Updated c object'
    self.name = 'Updated c object'
    // console.log(this) <-- Now, 'this' points to the object 'c'
    console.log(self)

    /**
     * When there is function inside a method however, the 'this' keyword
     * doesn't reference the object anymore
     */
    var setName = function(newName) {
      // Bullshit ? 
      // this.name = newName <-- Doesn't reference 'c', but the global object
      self.name = newName 
    }

    setName('Updated again the c object!')
    console.log(self)
  }
}

c.log()