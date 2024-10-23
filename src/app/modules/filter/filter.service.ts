import { TSell } from '../sell/sell.interface';
import { Sell } from '../sell/sell.model';

export const filterByNameDB = async (
  name: string,
): Promise<TSell | boolean> => {
  const data = await Sell.findOne({ customer_name: name });

  if (data) {
    return data;
  }

  return false;
};
