import { body } from 'express-validator'

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
