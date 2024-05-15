import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { stylesMap } from "../radar/utils";

export default function RadarSkeleton() {
	return (
		<div className="relative w-full">
			<Skeleton className="size-[800px] rounded-full relative pt-20 my-0 mx-auto bg-background/20" />
			{stylesMap.map((_, i) => (
				<div
					key={i}
					className={cn(
						"absolute w-1/2 px-[15%] flex flex-col gap-2",
						stylesMap[i]
					)}
				>
					<Skeleton className="w-[50%] h-10 bg-background/20" />
					<Skeleton className="w-[70%] h-20 bg-background/20" />
				</div>
			))}
		</div>
	);
}
