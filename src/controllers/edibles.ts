import { RequestHandler, Response, Request } from 'express'
import { handleCreateEdible } from '../services/edibles'

export const createEdible: RequestHandler = (req: Request, res: Response) => {
  const data = handleCreateEdible(req.body)
  res.send(data)
}
