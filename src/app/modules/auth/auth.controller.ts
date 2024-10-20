import { Request, Response } from 'express';
import { loginByEmail } from './auth.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import jwt from 'jsonwebtoken';
import { jwt_secret_key } from '../../config';

export const login = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    const user = await loginByEmail(email, password);

    if (!user.success) {
      return sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        message: user.message,
        success: user.success,
      });
    }

    const paylod = {
      email: user.data?.email,
      role: user.data?.role,
    };

    const token = jwt.sign(paylod, jwt_secret_key as string, {
      expiresIn: '1h',
    });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: user.success,
      message: user.message,
      data: {
        name: user.data?.name,
        email: user.data?.email,
        phone: user.data?.phone,
        role: user.data?.role,
        token: token,
      },
    });
  },
);
