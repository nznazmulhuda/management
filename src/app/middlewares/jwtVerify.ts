import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { jwt_secret_key } from '../config';

// jwt verify
export const JwtVerify = (
  req: Request,
  res: Response,
  next: NextFunction,
): any => {
  const { token } = req.cookies; // access token

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

// jwt check
export const JwtCheck = (
  req: Request,
  res: Response,
  next: NextFunction,
): any => {
  const { token } = req.cookies; // access token

  if (!token) {
    return res.status(401).send({ message: 'unauthorized access' });
  }

  jwt.verify(token, jwt_secret_key as string, (err: any) => {
    if (err) {
      return res.status(403).send({ message: 'forbidden access' });
    }

    next();
  });
};

// jwt sign
export const JwtSign = (payload: object): { token: string; data: object } => {
  const token = jwt.sign(payload, jwt_secret_key as string);

  return { token, data: payload };
};
