import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

type Tenv = string | number | undefined;

export const cookieOptions: {
  httpOnly: any;
  secure: any;
  sameSite: any;
} = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
};
export const port: Tenv = process.env.PORT;
export const db_uri: Tenv = process.env.DB_URI;
export const bcrypt_salt_round: Tenv = process.env.BCRYPT_SALT_ROUND;
export const jwt_secret_key: string | undefined = process.env.JWT_SECRET_KEY;
