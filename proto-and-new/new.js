function UserCreator(name, score) {
  this.name = name
  this.score = score
}

UserCreator.prototype.increment = function() {
  return ++this.score
}

UserCreator.prototype.login = function() {
  console.log('login')
}

const user1 = new UserCreator('Eva', 9)
console.log(user1.increment())
