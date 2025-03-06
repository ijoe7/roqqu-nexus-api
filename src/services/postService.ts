import db from '../config/db';
import { Post } from '../interfaces/post';
import { AppError } from '../config/appError';

export const createPost = async (post: Post): Promise<Post> => {
  const user = await db('users').where({ id: post.userId }).first();
  if (!user) throw new AppError('User not found', 404);

  const [id] = await db('posts').insert(post);
  return { id, ...post };
};

export const getPostsByUserId = async (userId: number): Promise<Post[]> => {
  const user = await db('users').where({ id: userId }).first();
  if (!user) throw new AppError('User not found', 404);

  return await db('posts').where({ userId });
};

export const deletePost = async (id: number): Promise<number> => {
  const deletedCount = await db('posts').where({ id }).delete();
  if (deletedCount === 0) throw new AppError('Post not found', 404);
  return deletedCount;
};
