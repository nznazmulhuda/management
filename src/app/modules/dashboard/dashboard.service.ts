import { Sell } from "../sell/sell.model"

// get total profit
export const getTotalProfitFromDB = async () => {
  return Sell.aggregate(
    [
      {
        $group: {
          _id: '',
          total_profit: { $sum: '$profit' }
        }
      }
    ],
    { maxTimeMS: 60000, allowDiskUse: true }
  );
}