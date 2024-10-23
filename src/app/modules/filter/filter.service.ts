import { TSell } from '../sell/sell.interface';
import { Sell } from '../sell/sell.model';

// filter by name
export const filterByNameDB = async (
  name: string,
): Promise<TSell | boolean> => {
  const data = await Sell.findOne({ customer_name: name });

  if (data) {
    return data;
  }

  return false;
};

// filter by total price asc | dsc order
export const filterByPriceDB = async (
  order: 'asc' | 'dsc',
): Promise<TSell[] | boolean> => {
  if (order === 'asc') {
    return await Sell.find({}).sort({ total_price: 1 });
  } else if (order === 'dsc') {
    return await Sell.find({}).sort({ total_price: -1 });
  }
  return false;
};
