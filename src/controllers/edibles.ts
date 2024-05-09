import { Response, Request } from 'express'
import { handleCreateEdible } from '../services/edibles'
import { FieldValidationError, Result, validationResult } from 'express-validator'

export const createEdible = (req: Request, res: Response): any => {
  try {
    const err: Result = validationResult(req)
    if (!err.isEmpty()) {
      const errorData: FieldValidationError[] = err.array()
      const pathMessage: string = errorData[0].path
      res.status(404).send(`Invalid or missing value ${pathMessage}`)
    }
    const data = handleCreateEdible(req.body)
    res.send(data)
  } catch (error) {
    res.status(500).send('Something went wrong')
  }
}
