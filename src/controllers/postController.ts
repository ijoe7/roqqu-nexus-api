// src/controllers/postController.ts
import { Request, Response, NextFunction } from 'express';
import * as postService from '../services/postService';
import { AppError } from '../config/appError';
import { responseHandler } from '../config/responseHandler';

export const createPostController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const post = await postService.createPost(req.body);
    return responseHandler(res, 201, 'Post created successfully', post);
  } catch (error) {
    next(error);
  }
};

export const getPostsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = parseInt(req.query.userId as string);
    if (!userId) throw new AppError('User ID is required', 404);
    const posts = await postService.getPostsByUserId(userId);
    return responseHandler(res, 200, 'Posts retrieved successfully', posts);
  } catch (error) {
    next(error);
  }
};

export const deletePostController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const deletedCount = await postService.deletePost(id);
    if (deletedCount === 0) throw new AppError('Post not found', 404);
    return responseHandler(res, 200, 'Post deleted successfully');
  } catch (error) {
    next(error);
  }
};
