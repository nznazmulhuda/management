import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { getAllCostsFromDB } from './cost.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

// get all costs data from db
export const getAllCosts = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const data = await getAllCostsFromDB();

    if (!data) {
      return sendResponse(res, {
        message: 'No cost data found!',
        statusCode: httpStatus.NOT_FOUND,
        success: false,
      });
    }

    return sendResponse(res, {
      message: 'Costs data fetched success!',
      statusCode: httpStatus.OK,
      success: true,
      data: data,
    });
  },
);
