import db from '../config/db';
import { User } from '../interfaces/user';
import { AppError } from '../config/appError';

export const createUser = async (user: User): Promise<User> => {
  const [id] = await db('users').insert(user);
  return { id, ...user };
};

export const getUsers = async (pageNumber: number, pageSize: number): Promise<User[]> => {
  return await db('users')
    .limit(pageSize)
    .offset(pageNumber * pageSize);
};

export const getUserById = async (id: number): Promise<User | undefined> => {
  const user = await db('users').where({ id }).first();
  if (!user) throw new AppError('User not found', 404);

  const address = await db('addresses').where({ userId: id }).first();
  return { ...user, address };
};

export const countUsers = async (): Promise<number> => {
  const result = await db('users').count('* as count').first();
  return result ? Number(result.count) : 0;
};
