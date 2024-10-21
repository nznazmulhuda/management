import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import {
  addSellDataDB,
  deleteSellFromDB,
  getAllSellFromDB,
  getSingleSellFromDB,
  updateSellFromDB,
} from './sell.service';
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
export const singleSellData = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
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
  },
);

// add new sell data
export const addSellData = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const data = req.body;

    const isAdded = addSellDataDB(data);

    if (!isAdded) {
      return sendResponse(res, {
        message: 'Data added failed!',
        success: false,
        statusCode: httpStatus.BAD_REQUEST,
      });
    }

    return sendResponse(res, {
      message: 'Data added successfully!',
      success: true,
      statusCode: httpStatus.OK,
    });
  },
);

// update a single data
export const updateSellData = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { id, data } = req.body;

    const isUpdate = await updateSellFromDB(id, data);

    if (!isUpdate) {
      return sendResponse(res, {
        message: 'Unable to update sell data!',
        success: false,
        statusCode: httpStatus.NOT_MODIFIED,
      });
    }

    return sendResponse(res, {
      message: 'Updated success!',
      success: true,
      statusCode: httpStatus.OK,
    });
  },
);

// delete a single data
export const deleteSellData = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.body;

    const isDelete = await deleteSellFromDB(id);

    if (!isDelete) {
      return sendResponse(res, {
        message: 'Unable to delete this sell data!',
        success: false,
        statusCode: httpStatus.NOT_IMPLEMENTED,
      });
    }

    return sendResponse(res, {
      message: 'Deleted successfully!',
      success: true,
      statusCode: httpStatus.OK,
    });
  },
);
