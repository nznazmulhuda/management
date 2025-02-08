import { Document } from 'mongoose';

export interface TSell extends Document {
  size: string;
  color: string;
  quantity: number;
  total_costing: number;
  costing_per_tshirt: number;
  single_tshirt_profit: number;
  total_price: number;
  single_price: number;
  profit: number;
  order_status: string;
  money_status: string;
  customer_name: string;
  customer_number: string;
  customer_address: string;
  who_get_the_order: string;
}
