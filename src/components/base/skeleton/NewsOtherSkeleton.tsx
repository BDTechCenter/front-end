import { Skeleton } from "@/components/ui/skeleton";

export default function NewsOtherSkeleton() {
	return (
		<div className="flex flex-rol h-20 2xl:h-40 gap-2">
			<Skeleton className=" h-full min-w-[40%] 2xl:min-w-[50%] max-w-[40%] 2xl:max-w-[50%] " />
			<div className="flex w-full flex-col gap-2 justify-center">
				<Skeleton className="rounded-none h-2 w-[60%]" />
				<Skeleton className="rounded-none h-3 w-[80%]" />
			</div>
		</div>
	);
}
