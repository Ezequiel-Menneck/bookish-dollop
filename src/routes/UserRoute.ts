import express from 'express';
import {
  getUserById,
  getAllUsers,
  addUser,
  deleteUser,
  updateUser,
} from '../controller/UserController';

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users/add', addUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

export default router;
