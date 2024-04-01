"use client";

import { Button } from "@/components/ui/button";
import { ChangeEvent, useEffect, useState } from "react";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import InputTextEdit from "../common/InputTextEdit";
import ImageButton from "./ImageButton";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { newsSchema } from "@/types/schemas/newsShema";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { msalInstance } from "@/lib/sso/msalInstance";
import { useMutationPostNews } from "@/api/hooks/news/queries";
import { toast } from "react-toastify";
import InputTags from "../common/InputTags";

export default function ModalCreateNews() {
	const { mutate } = useMutationPostNews();
	const [tags, setTags] = useState<string[]>([]);

	const form = useForm<z.infer<typeof newsSchema>>({
		resolver: zodResolver(newsSchema),
	});

	const NewsObject = (values: z.infer<typeof newsSchema>) => {
		const accountInfo = msalInstance.getActiveAccount();
		const author: string = accountInfo?.name || "";

		const formData = new FormData();
		formData.append("author", author);
		formData.append("title", values.title);
		formData.append("body", values.body);

		if (values.tags) {
			formData.append("tags", values.tags?.toString());
		}

		if (values.image) {
			formData.append("image", values.image);
		}

		return formData;
	};

	function onSubmitForm(values: z.infer<typeof newsSchema>) {
		console.log(values.tags?.toString())
		const newsFormData = NewsObject(values);
		
		mutate(newsFormData, {
			onSuccess: (data) => {
				toast.success("News added with success", {
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
		});
	}

	const [imageKey, setImageKey] = useState<number>(0);

	useEffect(() => { 
		if (form.formState.isSubmitSuccessful) {
			form.reset({ image: null, body: "", tags: [], title: "" });
			setImageKey((prevKey) => prevKey + 1);
		}
	}, [form, form.formState, form.reset]);

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className="rounded-sm w-48 p-5 font-semibold text-lg"
					variant={"bdlight"}
				>
					Add News
				</Button>
			</DialogTrigger>
			<DialogContent className="w-[80%] 2xl:w-[80%] h-[90%] 2xl:h-[55%] ">
				<DialogHeader>
					<DialogTitle className="text-bdpurple">Create a News</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmitForm)}
						className="flex gap-1 flex-row w-full justify-between overflow-y-scroll overflow-x-scroll"
					>
						<div className="w-[40%] flex flex-col gap-5">
							<FormField
								control={form.control}
								name="image"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="font-medium text-md">
											Poster
										</FormLabel>
										<FormControl>
											<ImageButton key={imageKey} {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="title"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="font-medium text-md">Title</FormLabel>
										<FormControl>
											<Input
												placeholder="Your title here..."
												maxLength={100}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="tags"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="font-medium text-md">Tags</FormLabel>
										<FormControl>
											<InputTags onChange={setTags} variant="row" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="flex flex-col w-[58%]">
							<FormField
								control={form.control}
								name="body"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="font-medium text-md w-full text-start">
											Content
										</FormLabel>
										<FormControl>
											<InputTextEdit {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<DialogFooter>
								<Button
									type="submit"
									className="rounded-sm border p-2 font-semibold text-base"
									variant="bdlight"
								>
									Add
								</Button>
							</DialogFooter>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
