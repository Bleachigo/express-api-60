import express from 'express';
import { userController } from '../controllers/userController.js';
import { basicAuth } from '../middleware/auth.middleware.js';

const router = express.Router();

router.use(basicAuth);

router.get('/', userController.getUsers);
router.post('/', userController.postUsers);
router.get('/:userId', userController.getUserById);
router.put('/:userId', userController.putUserById);
router.delete('/:userId', userController.deleteUserById);

export default router;
