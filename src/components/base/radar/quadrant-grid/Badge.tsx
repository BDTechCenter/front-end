import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeTypes = {
	all: "bg-zinc-500 border-zinc-500",
	adopt: "bg-bdgreen border-bdgreen",
	trial: "bg-bdblue border-bdblue",
	observe: "bg-bdlightpurple border-bdlightpurple",
	hold: "bg-bdpurple border-bdpurple",
};

interface BadgeProps extends VariantProps<typeof badgeVariants> {
	children: ReactNode;
	className?: string;
	type: keyof typeof badgeTypes | string;
}

const badgeVariants = cva(
	"text-white font-semibold box-border px-4 py-1 uppercase align-middle my-auto mx-auto overflow-hidden border border-zinc-400",
	{
		variants: {
			lg: {
				true: "rounded-3xl text-sm h-8",
				false: "rounded-2xl text-xs h-6",
			},
		},
		defaultVariants: {
			lg: false,
		},
	}
);

export default function Badge({ type, lg, children, className }: BadgeProps) {
	return (
		<span
			className={cn(
				badgeVariants({ lg }),
				badgeTypes[type as keyof typeof badgeTypes],
				className,
				"h-8 select-none"
			)}
		>
			{children}
		</span>
	);
}
