import httpStatus from 'http-status';
import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {
  filterByNameDB,
  filterByPriceDB,
  filterMoneyStatusDB,
  filterOnOrderStatusDB,
} from './filter.service';

// filter by name
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

// filter by total price
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

    // get data from service
    const data = await filterByPriceDB(order as 'asc' | 'dsc');

    // if there is no data
    if (!data) {
      return sendResponse(res, {
        message: 'Invalid order type!',
        statusCode: httpStatus.NOT_FOUND,
        success: false,
      });
    }

    // when data is fetched successfully
    return sendResponse(res, {
      message: 'Data fetched successfully!',
      statusCode: httpStatus.OK,
      success: true,
      data: data,
    });
  },
);

// filter on order status
export const filterOnOrderStatus = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { status } = req.params;

    // get data from db
    const data = await filterOnOrderStatusDB(
      status as
        | 'cancle'
        | 'ordered'
        | 'rejected'
        | 'delivered'
        | 'in-transit'
        | 'not-delivery',
    );

    // if there is no data
    if (!data) {
      return sendResponse(res, {
        message: 'no data found!',
        statusCode: httpStatus.NOT_FOUND,
        success: false,
      });
    }

    // when data fetched successfully
    return sendResponse(res, {
      message: 'Data fetched successfully!',
      statusCode: httpStatus.OK,
      success: true,
      data: data,
    });
  },
);

// filter on money status
export const filterMoneyStatus = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { moneyStatus } = req.params;

    const data = await filterMoneyStatusDB(moneyStatus as 'unpaid' | 'paid');

    // if there is no data found
    if (!data) {
      return sendResponse(res, {
        message: 'No data found!',
        statusCode: httpStatus.NOT_FOUND,
        success: false,
      });
    }

    // when data fetched successfully
    return sendResponse(res, {
      message: 'Data fetched successfully!',
      statusCode: httpStatus.OK,
      success: true,
      data: data,
    });
  },
);
