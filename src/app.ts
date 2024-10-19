import cors from 'cors';
import cookieParser from 'cookie-parser';
import express, { Application, Request, Response } from 'express';
import { port } from './config';
import router from './routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// app router
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('I am on...' + ' ' + port);
});

export default app;
