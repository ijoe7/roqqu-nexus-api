// src/services/userService.ts
import db from '../config/db';

export interface User {
  id?: number;
  name: string;
  email: string;
}

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
  return await db('users').where({ id }).first();
};
