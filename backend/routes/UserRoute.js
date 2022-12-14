import express from "express";
import {
    getUsers,
    getUserById,
    saveUser,
    updateUser,
    deleteUser,
    Home
} from "../controllers/UserController.js";

const router = express.Router();

router.get('/', Home);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', saveUser);
router.patch('/users/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;