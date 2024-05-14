"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxExternalLink } from "react-icons/rx";
import { cn } from "@/lib/utils";
import UserAvatar from "./UserAvatar";

interface NavBarProps {
	variant: "black" | "white";
}

const textColors = {
	black: {
		text: "text-darkforeground",
		noFocus: "text-darkforeground/60",
		hover: "hover:text-darkforeground/80",
	},
	white: {
		text: "text-foreground",
		noFocus: "text-foreground/60",
		hover: "hover:text-foreground/80",
	},
};

const logoImages = {
	black: "/bsh_logo_white.svg",
	white: "/bsh_logo_black_red.svg",
};

export default function NavBar({ variant }: NavBarProps) {
	const pathname = usePathname();
	const { text, noFocus, hover } = textColors[variant];
	const logoSrc = logoImages[variant];

	return (
		<div
			className={`flex flex-col ${
				variant === "black" ? "bg-bddarkgray" : "bg-white"
			}`}
		>
			<Image
				alt="Bosch Supergraphic"
				src="/supergraphic.svg"
				width="1000"
				height="1000"
				className="w-screen"
			/>
			<nav className="flex justify-between">
				<div className="flex flex-row gap-5 items-center">
					<Link href="/" className="w-fit">
						<Image
							alt="Bosch Logo White"
							src={logoSrc}
							width="0"
							height="0"
							className="h-14 w-fit"
						/>
					</Link>
					{navLinks.map((link) => (
						<Link
							key={link.href}
							className={cn(
								"flex justify-center items-center gap-1 text-sm font-medium transition-colors",
								hover,
								pathname === link.href ? text : noFocus
							)}
							href={link.href}
							target={link.external ? "_blank" : undefined}
						>
							{link.name} {link.external && <RxExternalLink />}
						</Link>
					))}
				</div>
				<div className="h-14 flex justify-center items-center p-4">
					<UserAvatar />
				</div>
			</nav>
		</div>
	);
}

interface navLinksProps {
	name: string;
	href: string;
	external?: boolean;
}

const navLinks: navLinksProps[] = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "News",
		href: "/news",
	},
	{
		name: "Bosch Tube",
		href: "https://bosch.mediaspace.de.kaltura.com/channel/BD-Innovation/22606",
		external: true,
	},
];
