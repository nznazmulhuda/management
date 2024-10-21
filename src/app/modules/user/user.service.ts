import { TUser } from './user.interface';
import { User } from './user.model';

// get alll user
export const getAllUserFromDB = async (): Promise<TUser[]> => {
  return User.find({}).select({ password: 0 });
};

// get single user
export const getUserByIdFromDB = async (id: string): Promise<TUser | null> => {
  return await User.findById(id);
};
