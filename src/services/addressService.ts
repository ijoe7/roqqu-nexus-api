import db from '../config/db';
import { Address } from '../interfaces/address';
import { AppError } from '../config/appError';

export const createAddress = async (address: Address): Promise<Address> => {
  const user = await db('users').where({ id: address.userId }).first();
  if (!user) throw new AppError('User does not exist', 404);

  const existing = await db('addresses').where({ userId: address.userId }).first();
  if (existing) throw new AppError('Address already exists for this user', 400);
  const [id] = await db('addresses').insert(address);
  return { id, ...address };
};

export const getAddressByUserId = async (userId: number): Promise<Address | undefined> => {
  return await db('addresses').where({ userId }).first();
};

export const updateAddress = async (userId: number, address: Partial<Address>): Promise<number> => {
  return await db('addresses').where({ userId }).update(address);
};