import express from 'express'
import { createEdible } from '../controllers/edibles'

const router = express.Router()

router.get('/create', createEdible)

export default router