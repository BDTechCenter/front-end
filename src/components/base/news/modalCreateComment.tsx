"use client";

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

export default function ModalCreateComment() {
	const form = useForm<z.infer<typeof commentSchema>>({
		resolver: zodResolver(commentSchema),
	});

	function onSubmit(values: z.infer<typeof commentSchema>) {
		console.log(values);
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
					className="rounded-sm w-48 shadow-md p-5 font-semibold text-lg mt-10"
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
					</form>
				</Form>
				<DialogFooter className="sm:justify-start">
					<DialogClose asChild>
						<Button
							type="submit"
							className="rounded-lg shadow-md p-5 font-semibold text-lg"
							variant={"bdlight"}
						>
							Add
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
