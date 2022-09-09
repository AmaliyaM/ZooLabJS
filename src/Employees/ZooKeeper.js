export default class ZooKeeper {
  constructor(firstName, lastName, animalExpirience) {
    this.FirstName = firstName
    this.LastName = lastName
    this.AnimalExpirience = animalExpirience
  }

  AddAnimalExpirience(animal) {
    this.AnimalExpirience.push(animal.constructor.name)
  }

  HasAnimalExpirience(animal) {
    return this.AnimalExpirience.includes(animal.constructor.name)
  }

  FeedAnimal(time, animal) {
    if (this.HasAnimalExpirience(animal) && animal.FavouriteFood.count) {
      return animal.Feed(time, this)
    }
    return false
  }
}
