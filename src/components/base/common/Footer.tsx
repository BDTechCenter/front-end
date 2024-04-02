import Link from "next/link";

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="py-6 mt-6">
			<hr className="h-px w-[90%] mx-auto my-8 bg-foreground/70 border-0 " />
			<div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
				<div className="text-center md:text-left mb-4 md:mb-0">
					<p className="text-sm text-foreground">
						© {year} Bosch Digital, all rights reserved
					</p>
				</div>
				<div className="flex items-center justify-center space-x-4">
					{footerLinks.map((item) => (
						<Link
							key={item.title}
							className="text-base text-foreground hover:text-foreground/80 transition-colors 2xl:text-sm"
							target="_blank"
							href={item.href}
						>
							<span>{item.title}</span>
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
}

const footerLinks = [
	{
		title: "Corporate information",
		href: "https://www.bosch-digital.com/imprint/",
	},
	{
		title: "Legal notice",
		href: "https://www.bosch-digital.com/legal-notice/",
	},
	{
		title: "Data protection notice",
		href: "https://www.bosch-digital.com/data-protection-notice/",
	},
];
