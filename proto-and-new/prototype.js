const userCreator = (name, score) => {
  const newUser = Object.create(userFunctionStore)
  newUser.name = name
  newUser.score = score
  return newUser
}

const userFunctionStore = {
  increment: function() {
    ++this.score
  },
  login: function() {
    console.log('You are logged in')
  }
}

const user1 = userCreator('Dominique', 400)
const user2 = userCreator('Alex', 1000)

console.log(user1)
console.log(user2)
