import { Document } from 'mongoose';

export interface TSell extends Document {
  color: string;
  quantity: number;
  total_price: number;
  order_status: string;
  money_status: string;
  single_price: number;
  customer_name: string;
  customer_number: string;
  customer_address: string;
  who_get_the_order: string;
}
