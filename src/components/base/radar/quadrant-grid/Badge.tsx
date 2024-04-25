import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeTypes = {
	all: "bg-zinc-500 border-zinc-500",
	adopt: "bg-green-500 border-green-500",
	trial: "bg-amber-500 border-amber-500",
	assess: "bg-cyan-500 border-cyan-500",
	hold: "bg-red-500 border-red-500",
};

interface BadgeProps extends VariantProps<typeof badgeVariants> {
	children: ReactNode;
	type: keyof typeof badgeTypes | string;
}

const badgeVariants = cva(
	"text-white inline-block box-border uppercase align-middle my-0 mx-auto overflow-hidden border border-zinc-400",
	{
		variants: {
			lg: {
				true: "rounded-2xl text-sm h-8 px-0 ",
				false: "rounded-xl text-xs h-6 px-0 ",
			},
		},
		defaultVariants: {
			lg: false,
		},
	}
);

export default function Badge({ type, lg, children }: BadgeProps) {
	return (
		<span
			className={cn(
				badgeVariants({ lg }),
				badgeTypes[type as keyof typeof badgeTypes], "h-8 "
			)}
		>
			{children}
		</span>
	);
}
