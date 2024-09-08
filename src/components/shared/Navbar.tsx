"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
	const pathname = usePathname();

	const navlink = [
		{
			href: "/",
			label: "Dashboard",
		},
		{
			href: "/new-listing",
			label: "New Listing",
		},
		{
			href: "/all-lists",
			label: "All Listings",
		},
		{
			href: "/new-order",
			label: "New Order",
		},
	];
	return (
		<>
			<nav className="flex items-center justify-between p-8">
				<Link href={"/"} className="font-extrabold text-4xl cursor-pointer">
					Orbit Outfits
				</Link>

				<ul className="flex items-center gap-4">
					{navlink.map((link, index) => (
						<li
							key={index}
							className={`text-xl font-bold font-sans border-b ${
								pathname === link.href
									? "text-cyan-600 border-cyan-600"
									: "text-white border-transparent hover:text-cyan-500 hover:border-cyan-500"
							}`}
						>
							<Link href={link.href}>{link.label}</Link>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};
