"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import InputTextEdit from "./InputTextEdit";
import ImageButton from "../news/ImageButton";
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
import InputTags from "./InputTags";
import { FormType } from "@/api/types/all/type";
import LoadingIndicator from "./LoadingIndicator";
import ImageError from "./ImageError";
import { useFetchGetNewsIdRefetch } from "@/api/hooks/news/queries";

interface ModalCreateNewsProps {
	formData: FormType;
}

export function FormNewsLayout({ formData }: ModalCreateNewsProps) {
	const [open, setOpen] = useState(formData.open);
	const [executed, setExecuted] = useState(false);

	const { isRefetching, isRefetchError, refetch, data } =
		useFetchGetNewsIdRefetch(formData.idNews ? formData.idNews : "");

	const getValuesNews = async () => {
		refetch();
		console.log(data);
	};

	useEffect(() => {
		if (open && !executed) {
			getValuesNews();
			setExecuted(true);
		}
	}, [open]);

	const defaultValuesSet = formData.idNews
		? {
				title: data?.title,
				body: data?.body,
				tags: data?.tags,
			}
		: {};

	const form = useForm<z.infer<typeof newsSchema>>({
		defaultValues: defaultValuesSet,
		resolver: zodResolver(newsSchema),
	});

	const [imageKey, setImageKey] = useState<number>(0);

	useEffect(() => {
		if (form.formState.isSubmitSuccessful) {
			setOpen(false);
			form.reset({ image: null, body: "", tags: undefined, title: "" });
			setImageKey((prevKey) => prevKey + 1);
		}
	}, [form, form.formState, form.reset]);

	const formNews = () => {
		return (
			<Form {...form}>
				<form
					id={formData.idForm}
					onSubmit={form.handleSubmit(formData.OnSubmit)}
					className="flex gap-1 flex-row w-full justify-between overflow-y-scroll overflow-x-scroll p-2"
				>
					<div className="w-[40%] flex flex-col gap-5">
						<FormField
							control={form.control}
							name="image"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="font-medium text-md">Poster</FormLabel>
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
										<InputTags
											valueList={field.value}
											variant="row"
											{...field}
										/>
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
								className="rounded-sm mt-2 border p-2 font-semibold text-base"
								variant="bdlight"
							>
								Add
							</Button>
						</DialogFooter>
					</div>
				</form>
			</Form>
		);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button
					className="border rounded-sm p-5 font-semibold text-lg"
					variant={"bdlight"}
				>
					{formData.title}
				</Button>
			</DialogTrigger>
			<DialogContent className="w-[80%] 2xl:w-[65%] h-[90%] 2xl:h-[70%]">
				<DialogHeader>
					<DialogTitle className="text-bdpurple">Create a News</DialogTitle>
				</DialogHeader>
				{!isRefetching && !isRefetchError && formNews()}
				{isRefetching && (
					<div className="mx-auto">
						<LoadingIndicator />
					</div>
				)}
				{isRefetchError && (
					<div className="mx-auto">
						<ImageError data={editError} />
					</div>
				)}
			</DialogContent>
		</Dialog>
	);
}

const editError = {
	text: "Error news not found",
	img: "/allError.gif",
};
