import express from 'express';
import { addSchedule } from '../controller/CalendarController';

const router = express.Router();

router.post('/calendar', addSchedule);

export default router;
