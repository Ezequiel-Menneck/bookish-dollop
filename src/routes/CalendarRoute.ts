import express from 'express'
import { handleGetBook } from '../services/CalendarService'

const router = express.Router()

router.get('/calendar', handleGetBook)

export default router