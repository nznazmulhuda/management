import { Response } from 'express';
import { cookieOptions } from '../config';

// generic response  type
type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  token?: string;
  data?: T;
};

export default function sendResponse<T>(res: Response, data: TResponse<T>) {
  if (data.token) {
    res
      .cookie('token', data.token, cookieOptions)
      .status(data.statusCode)
      .send({
        message: data.message,
        success: data.success,
        token: data.token,
        data: data.data,
      });
  }

  res.status(data.statusCode).send({
    message: data.message,
    success: data.success,
    token: data.token,
    data: data.data,
  });
}
