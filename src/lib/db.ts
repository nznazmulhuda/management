import mongoose, { Connection } from "mongoose";

let cachedConnection: Connection | null = null;

export async function connectToMongoDB() {
	if (cachedConnection) {
		console.log("Using cached db connection");
		return cachedConnection;
	}
	try {
		const cnx = await mongoose.connect(
			`${process.env.NEXT_PUBLIC_MONGODB_URI!}/${
				process.env.NEXT_PUBLIC_DB_NAME
			}`,
		);

		cachedConnection = cnx.connection;

		console.log("New mongodb connection established");

		return cachedConnection;
	} catch (error) {
		console.log(error);
		throw error;
	}
}
