import Enclosure from '../Enclosures/Enclosure.js'

export default class Zoo {
  constructor(enclosures = [], employees = []) {
    this.Enclosures = enclosures
    this.Employees = employees
  }

  AddEnclosures(name, squreFeet) {
    const enclosule = new Enclosure({ name, parentZoo: this, squreFeet })
    this.Enclosures.push(enclosule)
  }

  FindAvailableEnclosure(animal) {
    return this.Enclosures.find(
      (enclosure) =>
        animal.RequiredSpaceSqFt <= enclosure.SqureFeet &&
        enclosure.Animals?.every((item) => item.IsFriendlyWith(animal)),
    )
  }

  static HireEmployee(employee) {
    console.log(employee)
  }

  FeedAnimals(time) {
    const zooKeepers = this.Employees.findAll(
      (employee) => employee.constructor.name === 'ZooKeeper',
    )
    this.Enclosures.forEach((enclosure) => {
      enclosure.Animals.forEach((animal) => {
        const availableZooKeeper = zooKeepers.find(
          (zooKeeper) => zooKeeper.HasAnimalExpirience(animal),
        )
        if (availableZooKeeper && animal.FeedSchedule.includes(time)) {
          availableZooKeeper.FeedAnimal(time, animal)
        }
      })
    })
  }

  HealAnimals() {
    const veterinarians = this.Employees.findAll(
      (employee) => employee.constructor.name === 'Veterinarian',
    )
    this.Enclosures.forEach((enclosure) => {
      enclosure.Animals.forEach((animal) => {
        const availableVeterinarian = veterinarians.find(
          (veterinarian) => veterinarian.HasAnimalExpirience(animal),
        )
        if (availableVeterinarian) {
          availableVeterinarian.HealAnimal(animal)
        }
      })
    })
  }

  AddAnimal(animal) {
    this.FindAvailableEnclosure(animal)?.AddAnimal(animal)
  }
}
