export default class ZooApp {
  constructor(zoos) {
    this.zoos = zoos
  }

  AddZoo(zoo) {
    this.zoos.push(zoo)
  }
}
