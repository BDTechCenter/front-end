"use client";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogClose,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MouseEvent, useState } from "react";
import { MdTune } from "react-icons/md";
import InputTags from "../common/InputTags";
import { usePathname, useRouter } from "next/navigation";

export default function ModalFilter() {
	const [tags, setTags] = useState<string[]>([]);
	const router = useRouter();
	const pathname = usePathname();

	const handleClick = (e: MouseEvent<HTMLElement>) => {
		if (tags?.length > 0) {
			router.push(pathname + "?tags=" + tags.join(","));
		}
	};

	return (
		<Dialog>
			<DialogTrigger className="flex h-full justify-center items-center">
				<MdTune color="#7A2572" size={27} />
			</DialogTrigger>
			<DialogContent className="w-[40%]">
				<DialogHeader>
					<DialogTitle className="text-bdpurple">Filters News</DialogTitle>
					<DialogDescription>
						Filter news using your preferred tags.
					</DialogDescription>
					<DialogDescription className="text-red-600">
						Press enter to confirm the tag.
					</DialogDescription>
				</DialogHeader>
				<div className="w-full">
					<h1 className="font-semibold text-md">Tags</h1>
					<InputTags onChange={setTags} variant="wrap" />
					<DialogFooter className="flex w-full justify-end items-end">
						<DialogClose asChild>
							<Button
								type="submit"
								onClick={handleClick}
								className="text-lg "
								variant={"bdlight"}
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
