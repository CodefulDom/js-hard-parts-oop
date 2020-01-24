const userCreator = (name, score) => {
  const newUser = {}
  newUser.name = name
  newUser.score = score
  newUser.upByOne = function() {
    return ++newUser.score
  }
  return newUser
}

const jermell = userCreator('Jermell', 1000)
const dom = userCreator('Dom', 500)
console.log(jermell)
console.log(dom)
console.log(dom.upByOne())
console.log(dom)
