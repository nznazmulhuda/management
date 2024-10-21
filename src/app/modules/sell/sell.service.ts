import { ObjectId } from 'mongoose';
import { TSell } from './sell.interface';
import { Sell } from './sell.model';

// get all sell data form db
export const getAllSellFromDB = async (): Promise<TSell[]> => {
  return await Sell.find({});
};

// get single data form db
export const getSingleSellFromDB = async (
  id: string,
): Promise<TSell | { message: string; success: boolean }> => {
  const user = await Sell.findById(id).select({
    who_get_the_order: 0,
  });

  if (user) {
    return user;
  }

  return {
    message: 'Sell data not found!',
    success: false,
  };
};

// update data
export const updateSellFromDB = async (
  id: string,
  data: TSell,
): Promise<TSell | null> => {
  const cursor = await Sell.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  if (cursor) {
    return cursor;
  }

  return null;
};

// delete single data
export const deleteSellFromDB = async (id: string): Promise<boolean> => {
  const data = await Sell.findByIdAndDelete(id);

  if (!data) {
    return false;
  }

  return true;
};
