import cors from 'cors';
import cookieParser from 'cookie-parser';
import express, { Application, Request, Response } from 'express';

import { port } from './app/config';
import UserRouter from './app/modules/user/user.route';
import AuthRouter from './app/modules/auth/auth.route';
import SellRouter from './app/modules/sell/sell.route';
import FilterRouter from './app/modules/filter/filter.route';
import CostsRouter from './app/modules/cost/cost.route';
import DashboardRouter from './app/modules/dashboard/dashboard.routes'

const app: Application = express();

//parsers
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
    ],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// app route
app.use('/api', UserRouter); // all user route
app.use('/api', AuthRouter); // login route
app.use('/api', SellRouter); // sell route
app.use('/api', FilterRouter); // filter route
app.use('/api', CostsRouter); // costs route
app.use('/api/dashboard', DashboardRouter); // dashboard route

// default route
app.get('/', (req: Request, res: Response) => {
  res.send('I am on...' + ' ' + port);
});

export default app;
