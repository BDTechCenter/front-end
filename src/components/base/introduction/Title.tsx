import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface TitleProps{
  text: string
  className?: string | undefined
}

const titleVariants = cva("flex w-full justify-center", {
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

interface allTitleProps extends TitleProps, VariantProps<typeof titleVariants> { }

export default function Title({text, orientation, className}: allTitleProps) {
  return (
    <div className={cn(titleVariants({ orientation, className }))} >
        <h1 className="font-semibold text-4xl">
          {text}
        </h1>
      </div>
  )
}
