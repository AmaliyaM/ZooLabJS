// eslint-disable-next-line import/prefer-default-export
import FeedTime from './FeedTime.js'

export default class Animal {
  constructor(
    requiredSpaceSqFt,
    favouriteFood,
    feedTimes,
    feedSchedule,
    id,
    sick,
    neededMedicine,
  ) {
    this.RequiredSpaceSqFt = requiredSpaceSqFt
    this.FavouriteFood = favouriteFood
    this.FeedTimes = feedTimes
    this.FeedSchedule = feedSchedule
    this.ID = id
    this.Sick = sick
    this.NeededMedicine = neededMedicine
  }

  IsFriendlyWith(animal) {
    return this.FriendlyWith.includes(animal.constructor.name)
  }

  Feed(time, zooKeeper) {
    this.FavouriteFood -= 1
    const feed = new FeedTime(time, zooKeeper)
    this.FeedTimes.push(feed)
    console.log(
      `${this.constructor.name} ${this.ID} was fed by zookeeper ${zooKeeper}`,
    )
    return true
  }

  IsSick() {
    return this.Sick
  }

  AddFeedSchedule(hours) {
    this.FeedSchedule.push(hours)
  }

  Heal(medicine) {
    const medicineItem = medicine
    this.NeededMedicine = null
    this.Sick = false
    medicineItem.count -= 1
    return true
  }
}
