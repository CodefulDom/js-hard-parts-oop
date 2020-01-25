// #region [rgba(0, 205, 30, 0.1)] : Function - Object Combo
function userCreated(name, score) {
  this.name = name
  this.score = score
}
// //#endregion

userCreated.prototype.increment = function() {
  return ++this.score
}

userCreated.prototype.login = function() {
  return `Login`
}

const user2 = new userCreated('Ezra', 2000)
user2.increment()
user2.login()

/* 
The automatic place that a method that is assigned with the prototype keyword is the stored, is in the prototype property, which is an object of the userCreated function object combo

When assigning a method using the prototype keyword that method is stored in an object with the label of prototype of which itself is an sub object of the function object combo
*/
