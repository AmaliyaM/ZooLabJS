import Reptile from './Reptile.js'

export default class Turtle extends Reptile {
  constructor() {
    super()
    this.FriendlyWith = ['Parrot', 'Bison', 'Elephant', 'Turtle']
    this.RequiredSpaceSqFt = 10
  }
}
