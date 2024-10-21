import { TSell } from './sell.interface';
import { Sell } from './sell.model';

export const getAllSellFromDB = async (): Promise<TSell[]> => {
  return await Sell.find({});
};

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
