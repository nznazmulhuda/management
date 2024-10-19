import { Request, Response } from 'express';
import { app } from './app';
import { port } from './config';
import { connectDB } from './db/connectDB';

connectDB(); // database connection

app.get('/', (req: Request, res: Response) => {
  res.send('I am on...' + ' ' + port);
});
