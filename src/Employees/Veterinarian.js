export default class Veterinarian {
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

  HealAnimal(animal) {
    if (this.HasAnimalExpirience(animal) && animal.NeededMedicine.count) {
      return animal.Heal(animal.NeededMedicine)
    }
    return false
  }
}
