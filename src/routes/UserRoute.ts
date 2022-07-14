import express from "express";
import {
  getUserById,
  getAllUsers,
  addUser,
  deleteUser,
} from "./../services/UserService";
const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.post("/users/add", addUser);
router.delete("/users/:id", deleteUser);

export default router;
