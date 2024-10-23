import { model, Schema } from 'mongoose';
import { TCost } from './cost.interface';

const sellSchema = new Schema<TCost>(
  {
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    cost_details: {
      type: String,
      required: true,
    },
    cost_owner: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Cost = model<TCost>('Cost', sellSchema);
