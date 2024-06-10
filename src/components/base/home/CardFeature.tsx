import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface featuresProps {
	data: {
		title: string;
		icon: JSX.Element;
		img: string;
		content: string;
		orientation?: string;
	};
}

const viewVariants = cva(
	"flex w-full max-md:flex-col md:h-60 xl:h-72 max-md:dark dark:bg-bddarkgray",
	{
		variants: {
			orientation: {
				default: "bg-bdgray flex-row max-md:bg-bddarkgray",
				left: "bg-whiite flex-row-reverse max-md:bg-bddarkgray",
			},
		},
		defaultVariants: {
			orientation: "default",
		},
	}
);

interface allFeaturesProps
	extends featuresProps,
		VariantProps<typeof viewVariants> {}

export default function CardFeature({ data, orientation }: allFeaturesProps) {
	return (
		<div className={cn(viewVariants({ orientation }))}>
			<div className="h-full bg-bdpurple w-[30%] lg:w-auto max-md:w-full">
				<Image
					src={data.img}
					alt="Img Feature"
					width={1000}
					height={500}
					className="object-cover size-full"
				/>
			</div>
			<div className="flex w-[70%] items-center justify-center flex-col max-md:w-full">
				<div className="px-[20%] max-md:px-[10%] max-md:py-10">
					<h1 className="flex text-foreground text-left items-center w-full font-bold text-lg xl:text-xl 2xl:text-2xl">
						{data?.title}
						<span className="text-bdpurple ml-4 max-lg:hidden">
							{data?.icon}
						</span>
					</h1>
					<p className="text-foreground text-left w-full max-md:text-sm xl:text-lg 2xl:text-xl">
						{data?.content}
					</p>
				</div>
			</div>
		</div>
	);
}

export { viewVariants };
