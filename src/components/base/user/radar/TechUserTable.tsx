"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useFetchGetUserTech } from "@/api/hooks/user/queries";
import { MenuPopoverTech } from "./MenuPopoverTech";
import ImageError from "../../common/ImageError";
import CommentSkeleton from "../../skeleton/CommentSkeleton";

export function TechUserTable() {
	const searchParams = useSearchParams();
	const filterStatus = searchParams.get("status");
	const status = filterStatus ? filterStatus : "published";
	const { isLoading, isError, data } = useFetchGetUserTech(status);
	const [title, setTitle] = useState("Error");
	const router = useRouter();

	useEffect(() => {
		if (status === "published") {
			setTitle("Published");
		}
		if (status === "archived") {
			setTitle("Archived");
		}
		setTitle("Published");
	}, [searchParams, status]);

	function handleGoToItem(id: string, quadrant: string) {
		router.push(`/tech-radar/${quadrant}/${id}`);
	}

	if (data) {
		return data?.length !== 0 ? (
			<Table className="mt-4">
				<TableHeader>
					<TableRow>
						<TableHead>Title</TableHead>
						<TableHead>Author</TableHead>
						<TableHead>Action</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data?.map((tech) => (
						<TableRow key={tech.id} className="px-10">
							<TableCell
								className="font-medium cursor-pointer hover:text-bdpurple"
								onClick={() => handleGoToItem(tech.id, tech.quadrantId)}
							>
								{tech.title}
							</TableCell>
							<TableCell>{tech.authorEmail}</TableCell>
							<TableCell>
								{<MenuPopoverTech id={tech.id} isPublished={tech.isActive} />}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
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
