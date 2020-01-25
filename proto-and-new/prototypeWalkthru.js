function createUser(name, age) {
  const newUser = Object.create(userStore)
  newUser.name = name
  newUser.age = age
  return newUser
}

const userStore = {
  incrementAge: function() {
    return ++this.age
  },
  login: function() {
    return 'You are logged in.'
  }
}

const user1 = createUser('Dom', 36)
console.log(user1.incrementAge())
user1 /* ? */
