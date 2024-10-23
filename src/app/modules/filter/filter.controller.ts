import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { filterByNameDB, filterByPriceDB } from './filter.service';

export const filterByName = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { name } = req.params;

    // if the name filed is empty
    if (!name) {
      return sendResponse(res, {
        message: 'Name is invalid!',
        statusCode: httpStatus.NOT_ACCEPTABLE,
        success: false,
      });
    }

    const modifiedName = name.split('-').join(' ');

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

export const filterByTotalPrice = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { order } = req.params;

    // if the order filed is empty
    if (!order) {
      return sendResponse(res, {
        message: 'Order is invalid!',
        statusCode: httpStatus.NOT_ACCEPTABLE,
        success: false,
      });
    }

    const data = await filterByPriceDB(order as 'asc' | 'dsc');

    if (!data) {
      return sendResponse(res, {
        message: 'Invalid order type!',
        statusCode: httpStatus.NOT_FOUND,
        success: false,
      });
    }

    return sendResponse(res, {
      message: 'Data fetched successfully!',
      statusCode: httpStatus.OK,
      success: true,
      data: data,
    });
  },
);
