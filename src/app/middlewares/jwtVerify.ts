import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { jwt_secret_key } from '../config';

export const JwtVerify = (
  req: Request,
  res: Response,
  next: NextFunction,
): any => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).send({ message: 'unauthorized access' });
  }

  jwt.verify(token, jwt_secret_key as string, (err: any) => {
    if (err) {
      return res.status(401).send({ message: 'unauthorized access' });
    }

    next();
  });
};
