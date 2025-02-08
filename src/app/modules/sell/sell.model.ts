import { model, Schema } from 'mongoose';
import { TSell } from './sell.interface';

const SellSchema = new Schema<TSell>(
  {
    size: {
      type: String,
      required: true,
      enum: ['M', 'L', 'XL', 'XXL'],
    },
    color: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    total_costing: {
      type: Number,
      required: true,
      default: 0,
    },
    costing_per_tshirt: {
      type: Number,
      required: true,
      default: 0,
    },
    single_tshirt_profit: {
      type: Number,
      required: true,
      default: 0,
    },
    total_price: {
      type: Number,
      required: true,
      default: 0,
    },
    single_price: {
      type: Number,
      required: true,
      default: 0,
    },
    profit: {
      type: Number,
      required: true,
      default: 0,
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
    who_get_the_order: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Sell = model<TSell>('Sell', SellSchema);
