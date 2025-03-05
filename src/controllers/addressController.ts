import { Request, Response, NextFunction } from 'express';
import * as addressService from '../services/addressService';
import { AppError } from '../config/appError';
import { responseHandler } from '../config/responseHandler';

export const createAddressController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const address = await addressService.createAddress(req.body);
    // res.status(201).json({ message: 'Address created successfully', data: address });
    return responseHandler(res, 201, 'Address created successfully', address);
  } catch (error) {
    next(error);
  }
};

export const getAddressController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = parseInt(req.params.userId);
    const address = await addressService.getAddressByUserId(userId);
    if (!address) throw new AppError('Address not found', 404);
    return responseHandler(res, 200, 'Address retrieved successfully', address);
  } catch (error) {
    next(error);
  }
};

export const updateAddressController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = parseInt(req.params.userId);
    const updatedCount = await addressService.updateAddress(userId, req.body);
    if (updatedCount === 0) throw new AppError('Address not found', 404);
    return responseHandler(res, 200, 'Address retrieved successfully', updatedCount);
  } catch (error) {
    next(error);
  }
};
