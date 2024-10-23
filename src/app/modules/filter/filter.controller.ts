import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { filterByNameDB } from './filter.service';

export const filterByName = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { name } = req.params;

    const modifiedName = name.split('-').join(' ');

    // if the name filed is empty
    if (!modifiedName) {
      return sendResponse(res, {
        message: 'Name is invalid!',
        statusCode: httpStatus.NOT_ACCEPTABLE,
        success: false,
      });
    }

    // get data from service
    const data = await filterByNameDB(modifiedName);

    // if data is unavailable
    if (!data) {
      return sendResponse(res, {
        message: 'Data not found!',
        statusCode: httpStatus.NOT_FOUND,
        success: false,
      });
    }

    // when data is available
    return sendResponse(res, {
      message: 'Data found successful!',
      statusCode: httpStatus.OK,
      success: true,
      data: data,
    });
  },
);
