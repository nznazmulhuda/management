"use client";

import { IList } from "@/model/list.model";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

export default function NewListing() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IList>();

	const onSubmit = (data: IList) => {
		console.log(data);
	};

	return (
		<form
			className="border border-cyan-600 w-1/2 py-5 px-8 rounded-lg flex flex-col gap-4"
			onSubmit={handleSubmit(onSubmit)}
		>
			<h1 className="text-3xl font-bold text-center mb-4">Add New List</h1>

			<div className="flex flex-col gap-1">
				{errors.customerNumber && (
					<p className="text-red-500 -mb-4 mt-4 text-xs">customers number is required!</p>
				)}
				<input
					type="number"
					placeholder="customer number"
					{...register("customerNumber", { required: true })}
					className="border-b-2 border-cyan-700 bg-transparent rounded-lg w-full py-2 px-4 text-white font-semibold placeholder:font-light mt-4 focus-visible:outline-cyan-600 focus-within:outline-none outline-none focus-within:border-b-transparent"
				/>
			</div>

			<div className="flex flex-col gap-1">
				{errors.customerAddress && (
					<p className="text-red-500 -mb-4 mt-4 text-xs">customers address is required!</p>
				)}
				<input
					{...register("customerAddress", { required: true })}
					placeholder="customer address"
					className="border-b-2 border-cyan-700 bg-transparent rounded-lg w-full py-2 px-4 text-white font-semibold placeholder:font-light mt-4 focus-visible:outline-cyan-600 focus-within:outline-none outline-none focus-within:border-b-transparent"
				/>
			</div>

			<div className="flex flex-col gap-1">
				{errors.productQuantity && (
					<p className="text-red-500 -mb-4 mt-4 text-xs">product quantity is required!</p>
				)}
				<input
					type="number"
					placeholder="product quantity"
					{...register("productQuantity", { required: true })}
					className="border-b-2 border-cyan-700 bg-transparent rounded-lg w-full py-2 px-4 text-white font-semibold placeholder:font-light mt-4 focus-visible:outline-cyan-600 focus-within:outline-none outline-none focus-within:border-b-transparent"
				/>
			</div>

			<div className="flex flex-col gap-1">
				{errors.productType && (
					<p className="text-red-500 -mb-4 mt-4 text-xs">product type is required!</p>
				)}
				<select
					{...register("productType", { required: true })}
					className="border-b-2 border-cyan-700 bg-transparent text-white rounded-lg w-full py-2 px-4 font-semibold placeholder:font-light mt-4 focus-visible:outline-cyan-600 focus-within:outline-none outline-none focus-within:border-b-transparent"
					defaultValue={"defaultValue"}
				>
					<option className="text-black" value="defaultValue" disabled>
						Product type
					</option>

					<option className="text-black" value="printed">
						Printed
					</option>

					<option className="text-black" value="solid">
						Solid
					</option>

					<option className="text-black" value="jersey">
						jersey
					</option>

					<option className="text-black" value="polo">
						polo
					</option>

					<option className="text-black" value="pant">
						pant
					</option>
				</select>
			</div>

			<div className="flex flex-col gap-1">
				{errors.productColor && (
					<p className="text-red-500 -mb-4 mt-4 text-xs">product color is required!</p>
				)}
				<select
					{...register("productColor", { required: true })}
					className="border-b-2 border-cyan-700 bg-transparent text-white rounded-lg w-full py-2 px-4 font-semibold placeholder:font-light mt-4 focus-visible:outline-cyan-600 focus-within:outline-none outline-none focus-within:border-b-transparent"
					defaultValue={"defaultValue"}
				>
					<option className="text-black" value="defaultValue" disabled>
						Product color
					</option>

					<option className="text-black" value="black">
						Black
					</option>

					<option className="text-black" value="white">
						White
					</option>

					<option className="text-black" value="maroon">
						Maroon
					</option>

					<option className="text-black" value="bottle-green">
						Bottle green
					</option>
				</select>
			</div>

			<div className="flex flex-col gap-1">
				{errors.totalPrice && (
					<p className="text-red-500 -mb-4 mt-4 text-xs">total price is required!</p>
				)}
				<input
					type="number"
					placeholder="totalPrice"
					{...register("totalPrice", { required: true })}
					className="border-b-2 border-cyan-700 bg-transparent rounded-lg w-full py-2 px-4 text-white font-semibold placeholder:font-light mt-4 focus-visible:outline-cyan-600 focus-within:outline-none outline-none focus-within:border-b-transparent"
				/>
			</div>

			<div className="flex flex-col gap-1">
				{errors.deliveryPrice && (
					<p className="text-red-500 -mb-4 mt-4 text-xs">delivery price is required!</p>
				)}
				<input
					type="number"
					placeholder="deliveryPrice"
					{...register("deliveryPrice", { required: true })}
					className="border-b-2 border-cyan-700 bg-transparent rounded-lg w-full py-2 px-4 text-white font-semibold placeholder:font-light mt-4 focus-visible:outline-cyan-600 focus-within:outline-none outline-none focus-within:border-b-transparent"
				/>
			</div>

			<div className="flex flex-col gap-1">
				{errors.deliveryType && (
					<p className="text-red-500 -mb-4 mt-4 text-xs">delivery type is required!</p>
				)}
				<select
					{...register("deliveryType", { required: true })}
					className="border-b-2 border-cyan-700 bg-transparent rounded-lg w-full py-2 px-4 text-white font-semibold placeholder:font-light mt-4 focus-visible:outline-cyan-600 focus-within:outline-none outline-none focus-within:border-b-transparent"
					defaultValue={"defaultValue"}
				>
					<option className="text-black" value="defaultValue">
						Delivery type
					</option>

					<option className="text-black" value="pathao">
						Pathao
					</option>

					<option className="text-black" value="courier">
						Courier
					</option>

					<option className="text-black" value="orbit">
						Orbit
					</option>
				</select>
			</div>

			<div className="flex flex-col gap-1">
				<textarea
					type="text"
					placeholder="description"
					{...register("description", {})}
					className="border-b-2 border-cyan-700 bg-transparent rounded-lg w-full py-2 px-4 text-white font-semibold placeholder:font-light mt-4 focus-visible:outline-cyan-600 focus-within:outline-none outline-none focus-within:border-b-transparent resize-none"
				/>
			</div>

			<Button type="submit" className="w-full mt-4">
				Submit
			</Button>
		</form>
	);
}
