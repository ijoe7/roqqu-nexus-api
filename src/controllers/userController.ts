// src/controllers/userController.ts
import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/userService';
import { AppError } from '../config/appError';
import { responseHandler } from '../config/responseHandler';

export const createUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.createUser(req.body);
    return responseHandler(res, 201, 'User created successfully', user);
  } catch (error) {
    next(error);
  }
};

export const getUsersController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pageNumber = parseInt(req.query.pageNumber as string) || 0;
    const pageSize = parseInt(req.query.pageSize as string) || 10;
    const users = await userService.getUsers(pageNumber, pageSize);
    return responseHandler(res, 200, 'Users retrieved successfully', users);
  } catch (error) {
    next(error);
  }
};

export const getUserByIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const user = await userService.getUserById(id);
    if (!user) throw new AppError('User not found', 404);
    return responseHandler(res, 200, 'User retrieved successfully', user);
  } catch (error) {
    next(error);
  }
};

export const countUsersController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('I am here');
    const count = await userService.countUsers();
    return responseHandler(res, 200, 'User count retrieved successfully', { count });
  } catch (error) {
    next(error);
  }
};