// src/controllers/userController.ts
import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/userService';

export const createUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({ message: 'User created successfully', data: user });
  } catch (error) {
    next(error);
  }
};

export const getUsersController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pageNumber = parseInt(req.query.pageNumber as string) || 0;
    const pageSize = parseInt(req.query.pageSize as string) || 10;
    const users = await userService.getUsers(pageNumber, pageSize);
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const getUserByIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const user = await userService.getUserById(id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    next(error);
  }
};
