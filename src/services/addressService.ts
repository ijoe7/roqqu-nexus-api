import db from '../config/db';
import { Address } from '../interfaces/address';

export const createAddress = async (address: Address): Promise<Address> => {
  const [id] = await db('addresses').insert(address);
  return { id, ...address };
};

export const getAddressByUserId = async (userId: number): Promise<Address | undefined> => {
  return await db('addresses').where({ userId }).first();
};

export const updateAddress = async (userId: number, address: Partial<Address>): Promise<number> => {
  return await db('addresses').where({ userId }).update(address);
};