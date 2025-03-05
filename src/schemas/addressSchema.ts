import Joi from 'joi';

export const createAddressSchema = Joi.object({
  userId: Joi.number().required(),
  street: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  zip: Joi.string().required()
});
