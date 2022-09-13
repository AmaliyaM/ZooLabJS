import logList from '../log.js'
import validateVeterinarian from './VeterinarianHireValidator.js'
import validateZooKeeper from './ZooKeeperHireValidator.js'

export default function getHireValidator(employee, zoo) {
  switch (employee.constructor.name) {
    case 'ZooKeeper':
      return validateZooKeeper(employee, zoo)

    case 'Veterinarian':
      return validateVeterinarian(employee, zoo)

    default:
      logList.push(`Invalid class name ${employee.constructor.name}`)
      return false
  }
}
