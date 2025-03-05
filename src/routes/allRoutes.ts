import express from 'express';
import v1Routes from './v1/v1Routes';

const router = express.Router();

router.use('/api/v1', v1Routes);

export default router;
