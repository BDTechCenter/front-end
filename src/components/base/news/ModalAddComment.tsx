"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
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
import { useEffect } from "react";
import { useMutationPostComment } from "@/api/hooks/news/queries";
import { msalInstance } from "@/lib/sso/msalInstance";
import { toast } from "react-toastify";
import { CommentPostType } from "@/api/types/news/type";

export default function ModalAddComment({ newsId }: { newsId: string }) {
	const { mutate } = useMutationPostComment();

	const form = useForm<z.infer<typeof commentSchema>>({
		resolver: zodResolver(commentSchema),
	});

	function onSubmit(values: z.infer<typeof commentSchema>) {
		const accountInfo = msalInstance.getActiveAccount();
		const author: string = accountInfo?.name || "";

		const postData: CommentPostType = {
			"author": author,
			"comment": values.content
	};

		mutate(
			{ comment: postData, id: newsId },
			{
				onSuccess: (data) => {
					console.log(data);
					toast.success("Comment added with success", {
						position: "top-right",
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
					});
				},
				onError: (error) => {
					console.log(error);
					toast.error(error.message, {
						position: "top-right",
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
					});
				},
			}
		);
	}

	useEffect(() => {
		if (form.formState.isSubmitSuccessful) {
			form.reset({ content: "" });
		}
	}, [form, form.formState, form.reset]);

	return (
		<Dialog>
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
							<DialogClose asChild>
								<Button
									type="submit"
									className="rounded-sm border p-4 font-semibold text-base"
									variant="bdlight"
								>
									Add
								</Button>
							</DialogClose>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
