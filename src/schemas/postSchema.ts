import Joi from 'joi';

export const createPostSchema = Joi.object({
  userId: Joi.number().integer().positive().required(),
  title: Joi.string().trim().min(1).required(),
  body: Joi.string().trim().min(1).required()
});
