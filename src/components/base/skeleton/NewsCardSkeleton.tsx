import { Skeleton } from "@/components/ui/skeleton"

export function NewsCardSkeleton() {
  return (
    <div className="flex flex-col h-72 2xl:h-[28rem] gap-2">
      <Skeleton className="rounded-none h-[60%] 2xl:h-[65%] overflow-hidden" />
      <div className="flex flex-col gap-2">
        <Skeleton className="rounded-none h-5 w-[40%]" />
        <Skeleton className="rounded-none h-7 w-[80%]" />
      </div>
    </div>
  )
}
