// routers/ProductRouter.ts

import express from 'express';
import * as UserController from '../controllers/UserController';

const router = express.Router();

router.post('/', UserController.createUser);
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUserById);
router.delete('/:id', UserController.deleteUserById);
export default router;
