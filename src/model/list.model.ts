import { Document, model, Model, models, Schema } from "mongoose";

export interface IList extends Document {
	customerName: string;
	customerNumber: number;
	customerAddress: string;
	productQuantity: number;
	productType: string;
	productColor: string;
	totalPrice: number;
	deliveryPrice: number;
	deliveryType: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
}

export const ListSchema = new Schema<IList>(
	{
		customerName: {
			type: String,
			required: true,
		},
		customerNumber: {
			type: Number,
			required: true,
		},
		customerAddress: {
			type: String,
			required: true,
		},
		productQuantity: {
			type: Number,
			required: true,
		},
		productType: {
			type: String,
			required: true,
			enum: ["printed", "solid", "jersey", "polo", "pant"],
		},
		productColor: {
			type: String,
			required: true,
			enum: ["black", "white", "maroon", "bottle-green"],
		},
		totalPrice: {
			type: Number,
			required: true,
		},
		deliveryPrice: {
			type: Number,
			required: true,
		},
		deliveryType: {
			type: String,
			required: true,
			enum: ["pathao", "courier", "orbit"],
		},
		description: {
			type: String,
			default: "New List...",
		},
	},
	{
		timestamps: true,
	},
);

const ListModel: Model<IList> = models?.List || model("List", ListSchema);

export default ListModel;
