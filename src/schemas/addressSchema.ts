import Joi from 'joi';

export const createAddressSchema = Joi.object({
  userId: Joi.number().required(),
  street: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  zip: Joi.string().required()
});

export const updateAddressSchema = Joi.object({
  street: Joi.string().optional(),
  city: Joi.string().optional(),
  state: Joi.string().optional(),
  zip: Joi.string().optional()
});
