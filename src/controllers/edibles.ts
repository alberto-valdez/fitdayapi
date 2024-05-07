import { RequestHandler } from 'express'
import { handleCreateEdible } from '../services/edibles'

export const createEdible: RequestHandler = (req, res) => {
  const data = handleCreateEdible(req.body)
  res.send(data)
}
