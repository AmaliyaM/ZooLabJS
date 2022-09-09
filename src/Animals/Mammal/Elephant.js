import Mammal from './Mammal.js'

export default class Elephant extends Mammal {
  constructor() {
    super()
    this.FriendlyWith = ['Bison', 'Parrot', 'Turtle']
  }
}
