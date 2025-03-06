import express from 'express';
import userRoutes from './userRoutes';
import addressRoutes from './addressRoutes';
import postRoutes from './postRoutes';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/addresses', addressRoutes);
router.use('/posts', postRoutes);

export default router;
