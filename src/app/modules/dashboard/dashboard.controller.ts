import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { getTotalProfitFromDB } from "./dashboard.service";
import sendResponse from "../../utils/sendResponse";

// get the total profit from data base
export const getTotalProfit = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const totalProfit = await getTotalProfitFromDB()

    if (!totalProfit) {
      return sendResponse(res, {
        message: "Data not found!",
        statusCode: 404,
        success: false
      })
    }

    return sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Data found successfully!",
      data: totalProfit[0]
    })
  }
)