import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

type Tenv = string | number | undefined;

export const port: Tenv = process.env.PORT;
export const db_uri: Tenv = process.env.DB_URI;
export const bcrypt_salt_round: Tenv = process.env.BCRYPT_SALT_ROUND;
