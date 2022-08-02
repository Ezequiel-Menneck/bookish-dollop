import express from 'express';
import {
  addSchedule,
  deleteSchedule,
  getAllSchedules,
  updateSchedule,
} from '../controller/CalendarController';

const router = express.Router();

router.post('/calendar', addSchedule);
router.get('/calendar', getAllSchedules);
router.put('/calendar/:id', updateSchedule);
router.delete('/calendar/:id', deleteSchedule);

export default router;
