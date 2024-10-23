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
