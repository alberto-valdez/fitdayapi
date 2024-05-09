import express from 'express'
import { createEdible } from '../controllers/edibles'
import { edibleValidator } from '../validators'

const router = express.Router()

router.post('/create', edibleValidator, createEdible)

export default router
