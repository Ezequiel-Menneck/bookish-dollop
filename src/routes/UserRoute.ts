import express from 'express';
import { authUser, addUser, findUser } from '../controller/UserController';

const router = express.Router();

router.post('/user', addUser);
router.post('/user/auth', authUser);
router.get('/user', findUser);

export default router;
