export default function validateZooKeeper(zooKeeper, zoo) {
  return zoo.Enclosures.every((enclosure) => enclosure.Animals.every(
    (animal) => zooKeeper.HasAnimalExperience(animal),
  ))
}
