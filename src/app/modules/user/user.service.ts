import { TUser } from './user.interface';
import { User } from './user.model';

// get alll user
export const getAllUserFromDB = async (): Promise<TUser[]> => {
  return await User.find({});
};

// get single user
export const getUserByIdFromDB = async (id: string): Promise<TUser | null> => {
  return await User.findById(id);
};
