import { body } from 'express-validator'
import { unit } from './type'

export const edibleValidator = [
  body('name').isString(),
  body('unit').isString(),
  body('calories').isString(),
  body('weight').isString(),
  body('protein').isString(),
  body('fat').isString(),
  body('carbohydrates').isString(),
  body('fiber').isString(),
  body('sugar').isString()
]

export const isUnit = (data: any): boolean => {
  const result = Object.values(unit).includes(data)
  return result
}
