import { IoMenu } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { FormUpdateArticle } from "./FormUpdateArticle";
import { AlertArchiveArticle } from "./AlertArchiveArticle";
import { AlertPublishedArticle } from "./AlertPublishArticle";

interface MenuPopoverEditArticleProps {
	id: string;
	isPublished: boolean;
}

export function MenuPopoverEditArticle({
	id,
	isPublished,
}: MenuPopoverEditArticleProps) {
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
						<h4 className="font-medium leading-none">Menu Article</h4>
						<p className="text-sm text-muted-foreground">
							Delete or update your article through this menu
						</p>
					</div>
					<div className="grid gap-2">
						<div className="grid grid-cols-3 items-center gap-4">
							{!isPublished ? (
								<AlertPublishedArticle id={id} />
							) : (
								<AlertArchiveArticle id={id} />
							)}
						</div>
						{isPublished ? (
							<div className="grid grid-cols-3 items-center gap-4">
								<FormUpdateArticle id={id} />
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
