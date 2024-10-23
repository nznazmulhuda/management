import { Sell } from '../sell/sell.model';
import { TSell } from '../sell/sell.interface';

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

// filter on order status
export const filterOnOrderStatusDB = async (
  status:
    | 'cancle'
    | 'ordered'
    | 'rejected'
    | 'delivered'
    | 'in-transit'
    | 'not-delivery',
): Promise<TSell[] | boolean> => {
  if (status === 'cancle') {
    return await Sell.find({ order_status: status });
  } else if (status === 'ordered') {
    return await Sell.find({ order_status: status });
  } else if (status === 'rejected') {
    return await Sell.find({ order_status: status });
  } else if (status === 'delivered') {
    return await Sell.find({ order_status: status });
  } else if (status === 'in-transit') {
    return await Sell.find({ order_status: status });
  } else if (status === 'not-delivery') {
    return await Sell.find({ order_status: status });
  } else {
    return false;
  }
};