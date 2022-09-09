import Bird from './Bird.js'

export default class Parrot extends Bird {
  constructor() {
    super()
    this.FriendlyWith = ['Parrot', 'Bison', 'Elephant', 'Turtle']
    this.RequiredSpaceSqFt = 5
  }
}
