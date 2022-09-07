export default class ZooKeeper {
  constructor(firstName, lastName, animalExpirience) {
    this.FirstName = firstName
    this.LastName = lastName
    this.AnimalExpirience = animalExpirience
  }

  AddAnimalExpirience(animal) {
    this.AnimalExpirience.push(animal)
  }

  HasAnimalExpirience(animal) {
    return this.AnimalExpirience.includes(animal)
  }

  static FeedAnimal(animal) {
    console.log(animal)
  }
}
