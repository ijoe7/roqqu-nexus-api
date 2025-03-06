import { Router } from 'express';
import { createPostController, getPostsController, deletePostController } from '../controllers/postController';
import { validateRequest } from '../middlewares/validateRequest';
import { createPostSchema } from '../schemas/postSchema';

const router = Router();

router.post('/', validateRequest(createPostSchema), createPostController);
router.get('/', getPostsController);
router.delete('/:id', deletePostController);

export default router;