"use client";
import { MouseEvent, useState } from "react";
import { MdTune } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { UpdateUrlFilter } from "@/services/filter";
import InputTags from "../common/InputTags";

export default function ModalFilter() {
	const [tags, setTags] = useState<string[]>([]);
	const searchParams = useSearchParams();
	const router = useRouter();

	const titleUrl = searchParams.get("title");
	const tagsUrl = searchParams.get("tags");
	const pathnameDefault = usePathname();

	const handleClick = (e: MouseEvent<HTMLElement>) => {
		if (tags?.length > 0) {
			UpdateUrlFilter({
				filters: {
					filterTag: tagsUrl,
					filterTag2: titleUrl,
					type: "tags",
					searchParams: searchParams,
					pathnameDefault: pathnameDefault,
					values: tags.join(",").toLowerCase(),
					router: router,
				},
			});
		}
	};

	return (
		<Dialog>
			<DialogTrigger className="flex h-full justify-center items-center">
				<MdTune color="#7A2572" size={27} />
			</DialogTrigger>
			<DialogContent className="w-[40%]">
				<DialogHeader>
					<DialogTitle className="text-bdpurple">Filters Article</DialogTitle>
					<DialogDescription>
						Filter articles using your preferred tags.
					</DialogDescription>
				</DialogHeader>
				<div className="w-full">
					<h1 className="font-semibold text-md">Tags</h1>
					<InputTags onChange={setTags} variant="wrap" valueList={tags} />
					<DialogFooter className="flex w-full justify-end items-end">
						<DialogClose asChild>
							<Button
								type="submit"
								onClick={handleClick}
								className="text-lg"
								variant="bdlight"
							>
								Filter
							</Button>
						</DialogClose>
					</DialogFooter>
				</div>
			</DialogContent>
		</Dialog>
	);
}
