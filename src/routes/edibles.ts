import express from 'express'
import { createEdible } from '../controllers/edibles'

const router = express.Router()

router.post('/create', createEdible)

export default router
