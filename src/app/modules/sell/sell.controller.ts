import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { getAllSellFromDB, getSingleSellFromDB } from './sell.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

// get all data and send to client
export const allSellData = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const results = await getAllSellFromDB();

    if (!results.length) {
      return sendResponse(res, {
        message: 'no data on database!',
        statusCode: httpStatus.NOT_FOUND,
        success: false,
      });
    }

    return sendResponse(res, {
      message: 'Data fetched successfully!',
      statusCode: httpStatus.OK,
      success: true,
      data: results,
    });
  },
);

// get single data by using id and send to client
export const singleSellData = catchAsync(async (req, res) => {
  const { id } = req.body;

  const cursor = await getSingleSellFromDB(id);

  if ('success' in cursor && !cursor.success) {
    return sendResponse(res, {
      message: 'Sell data not found!',
      success: false,
      statusCode: httpStatus.NOT_FOUND,
    });
  }

  return sendResponse(res, {
    message: 'Sell data found!',
    success: true,
    statusCode: httpStatus.OK,
    data: cursor,
  });
});
