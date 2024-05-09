import { edible } from '../type'
import { isUnit } from '../validators'

export const handleCreateEdible = (edible: edible): edible => {
  const validUnit = isUnit(edible.unit)
  if (!validUnit) {
    throw new Error('Unit value is not valid')
  }
  console.log('Creating edible')
  return edible
}
