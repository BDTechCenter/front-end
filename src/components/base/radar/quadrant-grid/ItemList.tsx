import React from "react";
import { Item as ItemType } from "@/api/types/radar";
import Item from "./Item";
import { featuredOnly, nonFeaturedOnly } from "../utils";

interface ItemListProps {
	items: ItemType[];
	activeItem?: ItemType;
	noLeadingBorder?: boolean;
	headerStyle?: React.CSSProperties;
	itemStyle?: React.CSSProperties[];
	children: React.ReactNode;
}

export default function ItemList({
	children,
	items,
	activeItem,
	noLeadingBorder,
	headerStyle = {},
	itemStyle = [],
}: ItemListProps) {
	const featuredItems = featuredOnly(items);
	const nonFeaturedItems = nonFeaturedOnly(items);

	return (
		<div className="mb-6">
			<div className="mb-5" style={headerStyle}>
				{children}
			</div>
			<div className="item-list__list">
				{featuredItems.map((item, i) => (
					<Item
						key={item.name}
						item={item}
						noLeadingBorder={noLeadingBorder}
						active={activeItem?.name === item.name}
						style={itemStyle[i]}
						greyedOut={false}
					/>
				))}
				{nonFeaturedItems.map((item, i) => (
					<Item
						key={item.name}
						item={item}
						noLeadingBorder={noLeadingBorder}
						active={activeItem?.name === item.name}
						style={itemStyle[featuredItems.length + i]}
						greyedOut={true}
					/>
				))}
			</div>
		</div>
	);
}
