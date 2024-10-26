import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import {
  addCostDB,
  deleteCostDB,
  getAllCostsFromDB,
  getSingleCostFromDB,
  updateCostDB,
} from './cost.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

// get all costs data from db
export const getAllCosts = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const data = await getAllCostsFromDB(); // get data from service

    // if there is no data
    if (!data) {
      return sendResponse(res, {
        message: 'No cost data found!',
        statusCode: httpStatus.NOT_FOUND,
        success: false,
      });
    }

    // when data is fethched
    return sendResponse(res, {
      message: 'Costs data fetched success!',
      statusCode: httpStatus.OK,
      success: true,
      data: data,
    });
  },
);

// get single cost data from db
export const getSingleCost = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    const data = await getSingleCostFromDB(id); // get data from service

    // if no data found
    if (!data) {
      return sendResponse(res, {
        message: 'No cost data found!',
        statusCode: httpStatus.NOT_FOUND,
        success: false,
      });
    }

    // send response when data found
    return sendResponse(res, {
      message: 'Costs data fetched success!',
      statusCode: httpStatus.OK,
      success: true,
      data: data,
    });
  },
);

// add new cost
export const addNewCost = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const data = req.body;

    const isAdded = await addCostDB(data);

    if (!isAdded) {
      return sendResponse(res, {
        message: 'Unable to add new cost!',
        statusCode: httpStatus.NOT_ACCEPTABLE,
        success: false,
      });
    }

    return sendResponse(res, {
      message: 'New cost added successfully!',
      statusCode: httpStatus.OK,
      success: true,
    });
  },
);

// update old cost data
export const updateCost = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { data } = req.body;

    const isUpdate = await updateCostDB(data);

    if (!isUpdate) {
      return sendResponse(res, {
        message: 'Data not found! please try again...',
        statusCode: httpStatus.NOT_FOUND,
        success: false,
      });
    }

    return sendResponse(res, {
      message: 'Data update successfully!',
      statusCode: httpStatus.OK,
      success: true,
    });
  },
);

// delete a cost data
export const deleteCost = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.body;

  const isDelete = await deleteCostDB(id);

  if (!isDelete) {
    return sendResponse(res, {
      message: 'Unable to delete cost. Cost not found.',
      statusCode: httpStatus.NOT_FOUND,
      success: false,
    });
  }

  return sendResponse(res, {
    message: 'Cost deleted successfully!',
    statusCode: httpStatus.OK,
    success: true,
  });
});
