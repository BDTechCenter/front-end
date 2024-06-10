import React from "react";
import { Item as ItemType } from "@/api/types/radar";
import Item from "./Item";
import { activeOnly, nonActiveOnly } from "../utils";

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
	const activeItems = activeOnly(items);
	const nonActiveItems = nonActiveOnly(items);

	return (
		<div className="mb-6">
			<div className="mb-5" style={headerStyle}>
				{children}
			</div>
			<div className="item-list__list">
				{activeItems.map((item, i) => (
					<Item
						key={item.id}
						item={item}
						noLeadingBorder={noLeadingBorder}
						active={activeItem?.title === item.title}
						style={itemStyle[i]}
						greyedOut={false}
					/>
				))}
				{nonActiveItems.map((item, i) => (
					<Item
						key={item.id}
						item={item}
						noLeadingBorder={noLeadingBorder}
						active={activeItem?.title === item.title}
						style={itemStyle[activeItems.length + i]}
						greyedOut={true}
					/>
				))}
			</div>
		</div>
	);
}
