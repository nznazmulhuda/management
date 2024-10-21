import { model, Schema } from 'mongoose';
import { TSell } from './sell.interface';

const SellSchema = new Schema<TSell>(
  {
    customer_name: {
      type: String,
      required: true,
    },
    customer_number: {
      type: String,
      required: true,
    },
    customer_address: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    total_price: {
      type: Number,
      required: true,
      default: 0,
    },
    color: {
      type: String,
      required: true,
    },
    order_status: {
      type: String,
      required: true,
      default: 'not-delivery',
      enum: [
        'cancle',
        'ordered',
        'rejected',
        'delivered',
        'in-transit',
        'not-delivery',
      ],
    },
    money_status: {
      type: String,
      required: true,
      default: 'unpaid',
      enum: ['unpaid', 'paid'],
    },
    single_price: {
      type: Number,
      required: true,
      default: 0,
    },
    who_get_the_order: {
      type: String,
      required: true,
      default: 'hasib',
      enum: ['nahid', 'hasib', 'akhirul'],
    },
  },
  {
    timestamps: true,
  },
);

export const Sell = model<TSell>('Sell', SellSchema);
