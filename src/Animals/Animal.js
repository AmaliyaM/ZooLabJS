export default class Animal {
  constructor(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, id) {
    this.RequiredSpaceSqFt = requiredSpaceSqFt
    this.FavouriteFood = favouriteFood
    this.FeedTimes = feedTimes
    this.FeedSchedule = feedSchedule
    this.ID = id
  }

  static IsFriendlyWith(animal) {
    console.log(animal)
  }

  Feed(food, zooKeeper) {
    const feed = new FeedTime(food, zooKeeper)
    this.FeedTimes.push(feed)
  }

  static IsSick() {
    return true
  }

  AddFeedSchedule(hours) {
    this.FeedSchedule.push(hours)
  }

  static Heal(medicine) {
    return medicine
  }
}
