import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const viewVariants = cva("w-full h-80 bg-bdgray", {
	variants: {
		variant: {
			left: "",
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
			<div></div>
			<div className="flex items-center justify-center flex-coll">
				<h1>Stay up to date: explore our latest innovation news!</h1>
				<p>
					Our news page is your destination to discover the latest trends,
					technological advancements, and inspiring insights that are shaping
					the future.
				</p>
			</div>
		</div>
	);
}

export { viewVariants };
