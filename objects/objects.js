const user1 = {
  name: 'Dom',
  score: 4,
  increment() {
    return (this.score = this.score + 1)
  }
}

user1.increment() /* ? */
console.log(user1)

const user3 = Object.create({})
console.log(user3)
