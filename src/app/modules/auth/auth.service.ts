import { Types } from 'mongoose';
import { User } from '../user/user.model';
import bcrypt from 'bcrypt';

export const loginByEmail = async (
  mail: string,
  pass: string,
): Promise<{
  message: string;
  success: boolean;
  data?: { name: string; email: string; phone: string; id: Types.ObjectId };
}> => {
  const user = await User.findOne({ email: mail });

  if (!user) {
    return {
      message: 'invalid email or password!',
      success: false,
    };
  }

  // password check
  const isPassRight = await bcrypt.compare(pass, user.password);

  if (!isPassRight) {
    return {
      message: 'invalid email or password!',
      success: false,
    };
  }

  return {
    message: 'user found success!',
    success: true,
    data: {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    },
  };
};
