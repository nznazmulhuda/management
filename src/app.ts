import cors from 'cors';
import cookieParser from 'cookie-parser';
import express, { Application, Request, Response } from 'express';

import { port } from './app/config';
import UserRouter from './app/modules/user/user.route';
import AuthRouter from './app/modules/auth/auth.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// app route
app.use('/api', UserRouter);
app.use('/api', AuthRouter);

// default route
app.get('/', (req: Request, res: Response) => {
  res.send('I am on...' + ' ' + port);
});

export default app;
