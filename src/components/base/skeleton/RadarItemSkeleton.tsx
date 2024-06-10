import { Skeleton } from "@/components/ui/skeleton";

export function RadarItemSkeleton() {
	return (
		<div className="flex w-full flex-col gap-5">
			<Skeleton className="h-10 w-[25%]" />
			<div className="flex gap-5">
				<Skeleton className="h-10 w-[10%]" />
				<Skeleton className="h-10 w-[10%]" />
			</div>
			<Skeleton className="h-44 w-full" />
			<Skeleton className="h-44 w-full" />
			<Skeleton className="h-44 w-full" />
			<Skeleton className="h-44 w-full" />
		</div>
	);
}
