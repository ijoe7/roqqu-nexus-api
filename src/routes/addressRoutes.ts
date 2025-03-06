// src/routes/addressRoutes.ts
import { Router } from 'express';
import { createAddressController, getAddressController, updateAddressController } from '../controllers/addressController';
import { validateRequest } from '../middlewares/validateRequest';
import { createAddressSchema, updateAddressSchema } from '../schemas/addressSchema';

const router = Router();

router.post('/', validateRequest(createAddressSchema), createAddressController);
router.get('/:userId', getAddressController);
router.patch('/:userId', validateRequest(updateAddressSchema), updateAddressController);

export default router;
