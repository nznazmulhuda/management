import mongoose from 'mongoose';
import { db_uri, port } from '../config';
import app from '../../app';

export const connectDB = async () => {
  try {
    await mongoose.connect(db_uri as string);

    app.listen(port, () => console.log(`app is listenting on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};
