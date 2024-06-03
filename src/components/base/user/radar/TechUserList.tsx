import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useFetchGetUserTech } from "@/api/hooks/user/queries";
import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import ImageError from "../../common/ImageError";
import CommentSkeleton from "../../skeleton/CommentSkeleton";
import { TechCard } from "./TechCard";

export function TechUserList() {
	const { isLoading, isError, data } = useFetchGetUserTech();
	const searchParams = useSearchParams();
	const filterStatus = searchParams.get("status");
	const status = filterStatus ? filterStatus : "published";
	const [title, setTitle] = useState("Error");

	useEffect(() => {
		if (status === "published") {
			setTitle("Published");
		}
		if (status === "archived") {
			setTitle("Archived");
		}
		setTitle("Published");
	}, [searchParams, status]);

	if (data) {
		return data?.length !== 0 ? (
			<div className="flex flex-col w-full">
				<div className="w-full">
					<Carousel>
						<CarouselContent className="p-4 gap-5">
							{data?.map((tech) => <TechCard key={tech.id} data={tech} />)}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</div>
		) : (
			<div className="flex w-full items-center justify-center">
				<ImageError
					data={{
						text: "No tech, add one",
						img: "/noComment.gif",
					}}
				/>
			</div>
		);
	}

	if (isLoading) {
		return (
			<div className="relative grid grid-cols-2 sm:grid-cols-3 gap-5 2xl:gap-7">
				<CommentSkeleton />
				<CommentSkeleton />
				<CommentSkeleton />
			</div>
		);
	}

	if (isError) {
		return (
			<div className="flex w-full items-center justify-center">
				<ImageError
					data={{
						text: "Error User Tech",
						img: "/allError.gif",
					}}
				/>
			</div>
		);
	}
}
