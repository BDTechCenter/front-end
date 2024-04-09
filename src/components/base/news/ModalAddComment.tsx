"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import InputTextEdit from "../common/InputTextEdit";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { commentSchema } from "@/types/schemas/commentSchema";
import { useEffect, useState } from "react";
import { useMutationPostComment } from "@/api/hooks/news/queries";
import { msalInstance } from "@/lib/sso/msalInstance";
import { CommentPostType } from "@/api/types/news/type";

export default function ModalAddComment({ newsId }: { newsId: string }) {
	const { mutateAsync } = useMutationPostComment();
	const [open, setOpen] = useState(false);

	const form = useForm<z.infer<typeof commentSchema>>({
		resolver: zodResolver(commentSchema),
	});

	async function onSubmit(values: z.infer<typeof commentSchema>) {
		const accountInfo = msalInstance.getActiveAccount();
		const author: string = accountInfo?.name || "";

		const postData: CommentPostType = {
			author: author,
			comment: values.content,
		};

		await mutateAsync({ comment: postData, id: newsId }).then(() =>
			setOpen(false)
		);

	}

	useEffect(() => {
		if (form.formState.isSubmitSuccessful) {
			form.reset({ content: "" });
		}
	}, [form, form.formState, form.reset]);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button
					className="rounded-sm w-48 p-5 border font-semibold text-lg mt-10"
					variant={"bdlight"}
				>
					Add Comment
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="text-bdpurple">Create a News</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							control={form.control}
							name="content"
							render={({ field }) => (
								<FormItem className="w-[40rem]">
									<FormLabel className="font-medium text-md">Comment</FormLabel>
									<FormControl className="w-full">
										<InputTextEdit {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<DialogFooter className="sm:justify-start">
							<Button
								type="submit"
								className="rounded-sm border p-4 font-semibold text-base"
								variant="bdlight"
							>
								Add
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
