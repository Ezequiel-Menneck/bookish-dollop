import express from 'express'
import { handleGetBook } from '../services/calendar/calendar'

const router = express.Router()

router.get('/calendar', handleGetBook)

export default router