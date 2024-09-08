import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { connectToMongoDB } from "@/lib/db";

export const metadata: Metadata = {
	title: "Orbit Outfits Management",
	description: "Emopower your style, Where every stitch tells your story.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	connectToMongoDB();

	return (
		<html lang="en">
			{/* body */}
			<body suppressHydrationWarning={true}>
				{/* navbar */}
				<Navbar />

				{children}
			</body>
		</html>
	);
}
