import express from 'express'
import { handleGetBook } from '../services/user/user'

const router = express.Router()

router.get('/user', handleGetBook)

export default router