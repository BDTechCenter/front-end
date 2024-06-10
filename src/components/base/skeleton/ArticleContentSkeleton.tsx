import { Skeleton } from "@/components/ui/skeleton";

export function ArticleContentSkeleton() {
	return (
		<section className="flex h-full w-full mx-12 my-20 gap-16">
			<div className="flex flex-col gap-5 w-[70%]">
				<Skeleton className="rounded-none h-7 w-[80%]" />
				<div className="flex w-full flex-row gap-5">
					<Skeleton className="rounded-md h-12 w-16" />
					<Skeleton className="rounded-md h-12 w-28" />
					<Skeleton className="rounded-md h-12 w-16" />
				</div>
				<Skeleton className="h-[25rem] rounded-lg w-full" />
				<div className="flex flex-col w-full gap-2">
					<Skeleton className="rounded-none h-7 w-full" />
					<Skeleton className="rounded-none h-7 w-full" />
					<Skeleton className="rounded-none h-7 w-full" />
					<Skeleton className="rounded-none h-7 w-full" />
					<Skeleton className="rounded-none h-7 w-full" />
					<Skeleton className="rounded-none h-7 w-full" />
					<Skeleton className="rounded-none h-7 w-full" />
					<Skeleton className="rounded-none h-7 w-full" />
					<Skeleton className="rounded-none h-7 w-full" />
					<Skeleton className="rounded-none h-7 w-full" />
					<Skeleton className="rounded-none h-7 w-full" />
					<Skeleton className="rounded-none h-7 w-full" />
					<Skeleton className="rounded-none h-7 w-full" />
					<Skeleton className="rounded-none h-7 w-full" />
					<Skeleton className="rounded-none h-7 w-full" />
				</div>
				<div className="w-full h-[2px] bg-[#D9D9D9] mt-12"></div>
				<Skeleton className="rounded-none h-7 w-[30%]" />
			</div>
			<aside className="w-[30%]">
				<Skeleton className="rounded-none h-7 w-[50%]" />
			</aside>
		</section>
	);
}
