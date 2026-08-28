import express from 'express';
import { userController } from '../controllers/userController.js';

const router = express.Router();

router.get('/users', userController.getUsers);
router.post('/users', userController.postUsers);
router.get('/users/:userId', userController.getUserById);
router.put('/users/:userId', userController.putUserById);
router.delete('/users/:userId', userController.deleteUserById);

export default router;
