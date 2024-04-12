import React, { ReactNode } from "react";

import "./hero-headline.scss";

interface Props {
	alt?: string;
	children: ReactNode;
}

export function HeroHeadline({ alt, children }: Props) {
	return (
		<div className="text-4xl font-light leading-tight text-white py-0 mx-0 max-sm:text-2xl">
			{children} <span className="text-zinc-300 max-sm:block">{alt}</span>
		</div>
	);
}
