import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { getAllUserFromDB, getUserByEmailFromDB } from './user.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

// get all user
export const getAllUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const allUser = await getAllUserFromDB();

  if (allUser.length === 0) {
    return sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: 'No data in database',
    });
  }

  return sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    data: allUser,
    message: 'Data fetch Success!',
  });
};

// get user by email
export const getUserByEmail = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { email } = req.headers;

    const user = await getUserByEmailFromDB(email as string);

    if (user) {
      return sendResponse(res, {
        message: 'User found!',
        success: true,
        statusCode: httpStatus.OK,
      });
    }

    return sendResponse(res, {
      message: 'User not found!',
      success: false,
      statusCode: httpStatus.NOT_FOUND,
    });
  },
);
