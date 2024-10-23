import { TSell } from '../sell/sell.interface';
import { TCost } from './cost.interface';
import { Cost } from './cost.model';

// get all cost
export const getAllCostsFromDB = async (): Promise<TCost[] | boolean> => {
  const data = await Cost.find({});

  if (data.length > 0) {
    return data;
  }

  return false;
};

// get single cost data
export const getSingleCostFromDB = async (
  id: string,
): Promise<TCost | boolean> => {
  const data = await Cost.findById(id);

  if (data) {
    return data;
  }

  return false;
};

// add new cost
export const addCostDB = async (data: TCost): Promise<TCost> => {
  return await new Cost(data).save();
};
