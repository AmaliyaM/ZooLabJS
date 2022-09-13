export default function validateVeterinarian(veterinarian, zoo) {
  return zoo.Enclosures.every(
    (enclosure) => enclosure.Animals.every((animal) => veterinarian.HasAnimalExperience(animal)),
  )
}
