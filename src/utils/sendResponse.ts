import { Response } from 'express';

// generic response  type
type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  token: string;
  data: T;
};

export default function sendResponse<T>(res: Response, data: TResponse<T>) {
  res.status(data.statusCode).json({
    message: data.message,
    success: data.success,
    token: data.token,
    data: data.data,
  });
}
