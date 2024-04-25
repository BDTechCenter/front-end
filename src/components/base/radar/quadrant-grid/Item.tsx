import React from "react";
import Link from "next/link";
import { Item as ItemType } from "@/api/types/radar";
import { cn } from "@/lib/utils";
import Flag from "./Flag";

interface Props {
	item: ItemType;
	noLeadingBorder?: boolean;
	active?: boolean;
	style?: React.CSSProperties;
	greyedOut?: boolean;
}

export default function Item({
	item,
	noLeadingBorder = false,
	active = false,
	style = {},
	greyedOut = false,
}: Props) {
	return (
		<Link
			className={cn(
				"p-2 border-b-zinc-400 block transition color-zinc-400 box-border hover:opacity-75",
				{
					"first:border-t-0 last:border-b-0": noLeadingBorder,
					"is-active": active,
				}
			)}
			href={`${item.quadrant}/${item.name}`}
			style={style}
		>
			<div
				className={cn("text-lg text-black", {
					"text-zinc-300": greyedOut,
				})}
			>
				{item.title}
				<Flag item={item} />
			</div>
			{item.info && (
				<div className="mt-1 text-xs text-zinc-500">{item.info}</div>
			)}
		</Link>
	);
}
