import { Turtle, Grass, Elephant, Snake, Parrot } from './import.js'
import Zoo from './Zoo/Zoo.js'
import Enclosure from './Enclosures/Enclosure.js'
import Antibiotics from './Medicines/Antibiotics.js'

// import Zoo from './Zoo/Zoo.js'
// import TurtleClass from './Animals/Reptile/Turtle.js'

const newZoo = new Zoo()
const turtle = new Turtle.default()
const elephant = new Elephant.default()
const parrot = new Parrot.default()
const snake = new Snake.default()
const encl = new Enclosure({
  name: 'e1',
  animals: [turtle, snake],
  parentZoo: newZoo,
  squreFeet: 50,
})
console.log('encl"', encl)
newZoo.Enclosures.push(encl)
newZoo.AddEnclosures('name', 100)
console.log('asdasdasda', newZoo.FindAvailableEnclosure(parrot))

//console.clear()
//console.log('enclosures"', newZoo)
//console.log('grass', grass.count)
