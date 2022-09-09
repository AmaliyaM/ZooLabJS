export default class Enclosure {
  constructor({
    name, animals, parentZoo, squreFeet,
  }) {
    this.Name = name
    this.Animals = animals
    this.ParentZoo = parentZoo
    this.SqureFeet = squreFeet
  }

  AddAnimals(animal) {
    this.Animals.push(animal)
  }
}
