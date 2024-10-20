import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { getAllUserFromDB } from './user.service';
import sendResponse from '../../utils/sendResponse';

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
