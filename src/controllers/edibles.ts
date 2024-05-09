import { Response, Request } from 'express'
import { handleCreateEdible } from '../services/edibles'
import { FieldValidationError, Result, validationResult } from 'express-validator'
import { edible } from '../type'

export const createEdible = (req: Request, res: Response): any => {
  try {
    const err: Result = validationResult(req)
    if (!err.isEmpty()) {
      const errorData: FieldValidationError[] = err.array()
      const pathMessage: string = errorData[0].path
      return res.status(404).send(`Invalid or missing value ${pathMessage}`)
    }
    const data: edible = handleCreateEdible(req.body)
    return res.send(data)
  } catch (error: any) {
    console.log(error)
    return res.status(500).send(error.message)
  }
}
