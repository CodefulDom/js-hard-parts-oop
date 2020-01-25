function addBy3(num) {
  return num + 3
}

addBy3.stored = 5
addBy3(3)

console.log(addBy3.stored)
console.log(addBy3.prototype)

const whatsMyName = (name) => `Your name is ${name}`

const getName = whatsMyName('Dom')
console.log(getName)
whatsMyName.boogers = false
console.log(whatsMyName)

whatsMyName.namesOfKids = ['Elijah', 'Ezra']
console.log(whatsMyName)

function getAllMyKids() {
  return whatsMyName.namesOfKids.map((kid) => {
    return kid
  })
}

const kidResult = getAllMyKids()
console.log(kidResult)
