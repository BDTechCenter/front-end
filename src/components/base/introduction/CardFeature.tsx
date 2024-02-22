import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { BiNews } from "react-icons/bi"
import { MdOutlineRadar } from "react-icons/md"
import { LiaProjectDiagramSolid } from "react-icons/lia"

interface Props {
	title?: string
	icon?: React.ReactElement
	content?: string
}

const viewVariants = cva("flex w-full h-60 xl:h-72", {
	variants: {
		orientation: {
			default: "bg-bdgray flex-row",
			left: "bg-white flex-row-reverse",
		},
	},
	defaultVariants: {
		orientation: "default",
	},
})

interface allProps extends Props, VariantProps<typeof viewVariants> { }

export default function CardFeature({ title, content, orientation, icon }: allProps) {
	return (
		<div className={cn(viewVariants({ orientation }))}>
			<div className="h-full bg-bdpurple w-[30%]"></div>
			<div className="flex w-[70%] items-center justify-center flex-col">
				<div className="w-[65%]">
					<h1 className="flex text-left items-center w-full font-bold text-xl 2xl:text-3xl">
						{title}
						<span className="text-bdpurple ml-4">{icon}</span>
					</h1>
					<p className="text-left w-full text-lg 2xl:text-xl">
						{content}
					</p>
				</div>
			</div>
		</div>
	)
}

export { viewVariants }