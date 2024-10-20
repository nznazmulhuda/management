import mongoose from 'mongoose';
import { db_uri, port } from '../config';
import app from '../../app';
import { logger } from './logger';

export const connectDB = async () => {
  try {
    await mongoose
      .connect(db_uri as string)
      .then(() => logger.info('Memory connected👌👌'))
      .catch((err) => logger.error(err));

    app.listen(port, () => logger.info(`app is listenting on port ${port}`));
  } catch (err) {
    logger.error(err);
  }
};
