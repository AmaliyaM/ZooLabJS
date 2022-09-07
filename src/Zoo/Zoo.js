export default class Zoo {
  constructor(enclosures, employees) {
    this.Enclosures = enclosures
    this.Employees = employees
  }

  static AddEnclosures(name, squreFeet) {
    console.log(name, squreFeet)
  }

  static FindAvailableEnclosure(animal) {
    console.log(animal)
  }

  static HireEmployee(employee) {
    console.log(employee)
  }

  static FeedAnimals(date) {
    console.log(date)
  }

  static HealAnimals() {
    console.log()
  }

  static AddAnimal(animal) {
    console.log(animal)
  }
}
