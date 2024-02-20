import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const viewVariants = cva("flex w-full h-64", {
	variants: {
		variant: {
			default: "bg-bdgray flex-row",
			left: "bg-[#FFF] flex-row-reverse",
		},
	},
	defaultVariants: {
		variant: "left",
	},
});

export default function ViewFeatures({
	variant,
}: VariantProps<typeof viewVariants>) {
	return (
		<div className={cn(viewVariants({ variant }))}>
			<div className="h-full bg-bdpurple w-[40rem]"></div>
			<div className="flex flex-grow items-center justify-center flex-col">
				<h1 className="text-left w-[65%] font-bold text-2xl">
					Stay up to date: explore our latest innovation news!
				</h1>
				<p className="text-left w-[65%] text-lg">
					Our news page is your destination to discover the latest trends,
					technological advancements, and inspiring insights that are shaping
					the future.
				</p>
			</div>
		</div>
	);
}

export { viewVariants };
