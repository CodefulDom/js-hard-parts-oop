class UserCreated {
  constructor(name, score) {
    this.name = name
    this.score = score
  }
  getName() {
    return this.name
  }
  increment() {
    return ++this.score
  }
}

const dom = new UserCreated('Dom', 2600)
dom.getName() /* ? */

const becky = new UserCreated('becky', 2800)
console.log(becky)
becky.increment() /* ? */

UserCreated.prototype.age = function() {
  console.log(this.age)
}

becky.age = 45
console.log(becky)

const watchThis = {
  getFucked: () => {
    let wat = this
    console.log(wat)
    return wat
  },
  doThis() {
    console.log(this)
    return `🚀 good shit`
  }
}

watchThis.getFucked()
watchThis.doThis()
