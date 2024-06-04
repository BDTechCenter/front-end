import { IoMenu } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { AlertArchiveArticle } from "../article/AlertArchiveArticle";
import { AlertPublishedArticle } from "../article/AlertPublishArticle";
import { FormUpdateItem } from "./FormUpdateItem";

interface MenuPopoverTechProps {
	id: string;
	isPublished: boolean;
}

export function MenuPopoverTech({ id, isPublished }: MenuPopoverTechProps) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="bdlight" className="border">
					<IoMenu size={15} />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-80">
				<div className="grid gap-4">
					<div className="space-y-2">
						<h4 className="font-medium leading-none">Menu Tech</h4>
						<p className="text-sm text-muted-foreground">
							Delete or update your tech through this menu
						</p>
					</div>
					<div>
						<div className="grid grid-cols-3 items-center gap-4">
							{!isPublished ? (
								<AlertPublishedArticle id={id} />
							) : (
								<AlertArchiveArticle id={id} />
							)}
						</div>
						{isPublished ? (
							<div className="grid grid-cols-3 items-center gap-4">
								<FormUpdateItem id={id} />
							</div>
						) : (
							<></>
						)}
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}
