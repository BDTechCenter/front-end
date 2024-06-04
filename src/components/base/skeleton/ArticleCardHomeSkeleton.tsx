import { Skeleton } from "@/components/ui/skeleton";

export function ArticleCardHomeSkeleton() {
	return (
		<div className="relative h-full w-full">
			<Skeleton className="rounded-none relative h-full w-full" />
		</div>
	);
}
