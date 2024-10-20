import { Request, Response } from 'express';
import { loginByEmail } from './auth.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  const user = await loginByEmail(email, password);

  if (!user.success) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      message: user.message,
      success: user.success,
    });
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: user.success,
    message: user.message,
    data: {
      id: user.data?.id,
      name: user.data?.name,
      email: user.data?.email,
      phone: user.data?.phone,
    },
  });
};
