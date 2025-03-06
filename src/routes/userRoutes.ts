// src/routes/userRoutes.ts
import { Router } from 'express';
import { createUserController, getUsersController, getUserByIdController, countUsersController } from '../controllers/userController';
import { validateRequest } from '../middlewares/validateRequest';
import { createUserSchema } from '../schemas/userSchema';

const router = Router();

router.post('/', validateRequest(createUserSchema), createUserController);
router.get('/', getUsersController);
router.get('/count', countUsersController);
router.get('/:id', getUserByIdController);

export default router;
