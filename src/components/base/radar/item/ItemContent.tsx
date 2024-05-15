"use client";

import { usePathname } from "next/navigation";
import { useFetchGetRadarItemDetail } from "@/api/hooks/radar/queries";
import { MarkdownRenderer } from "../../common/MarkdownRenderer";
import ImageError from "../../common/ImageError";
import { RadarItemSkeleton } from "../../skeleton/RadarItemSkeleton";
import Badge from "../quadrant-grid/Badge";
import Footer from "../../common/Footer";

export default function ItemContent() {
	const path = usePathname();
	const itemId = path.split("/")[3];
	const { data, isLoading, isError } =
		useFetchGetRadarItemDetail(itemId);

	return (
		<div className="flex flex-col justify-between w-full my-16 gap-5 mx-14 max-sm:mx-5 lg:mx-24 xl:mx-36">
			{data && (
				<div className="flex flex-col gap-4">
					<h1 className="text-bdpurple text-3xl font-bold">{data.title}</h1>
					<div className="flex gap-5 items-center">
						<div>
							<Badge className="ml-0" type={data.ring.toLowerCase()}>
								{data.ring.toUpperCase()}
							</Badge>
						</div>
						<div>
							<h4>{data.expectation} Years</h4>
						</div>
					</div>
					{data.body.length > 0 ? (
						<MarkdownRenderer>{data.body}</MarkdownRenderer>
					) : (
						<p className="text-foreground">Sorry, no content :/</p>
					)}
				</div>
			)}
			{isLoading && (
				<div className="flex h-screen">
					<RadarItemSkeleton />
				</div>
			)}
			{isError && (
				<div className="flex w-full items-center justify-center">
					<ImageError data={errorRadarItem.error} />
				</div>
			)}
			<Footer />
		</div>
	);
}

const errorRadarItem = {
	notFound: {
		text: "Technology not found",
		img: "/allError.gif",
	},

	error: {
		text: "Error Technology",
		img: "/allError.gif",
	},
};
