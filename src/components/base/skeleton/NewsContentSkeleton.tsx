import { Skeleton } from "@/components/ui/skeleton"

export function NewsContentSkeleton() {
  return (
    <section className="flex h-full w-full mx-12 my-20 gap-16">
        <div className="flex flex-col gap-5 w-[70%]">
            <Skeleton className="rounded-none h-7 w-[80%]" />
            <Skeleton className="rounded-md h-20 w-[30%]" />
            <Skeleton className="h-[45rem] rounded-lg w-full" />
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
            <div className="flex mt-10 flex-col w-full gap-7">
                <Skeleton className="rounded-md h-40 w-full" />
                <Skeleton className="rounded-md h-40 w-full" />
                <Skeleton className="rounded-md h-40 w-full" />
            </div>
            <Skeleton className="rounded-lg h-10 w-[20%]" />
        </div>
        <aside className="w-[30%]">
            <Skeleton className="rounded-none h-7 w-[50%]" />
        </aside>
    </section>
  )
}
