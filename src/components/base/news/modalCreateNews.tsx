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

export default function ModalCreateNews() {
	const form = useForm<z.infer<typeof newsSchema>>({
		resolver: zodResolver(newsSchema),
	});

	function onSubmit(values: z.infer<typeof newsSchema>) {
		console.log(values);
	}

	const [imageKey, setImageKey] = useState<number>(0);

	useEffect(() => {
		if (form.formState.isSubmitSuccessful) {
			form.reset({ poster: null, content: "", tags: [], title: "" });
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
			<DialogContent className="w-[80%] 2xl:w-[55%] h-[80%] 2xl:h-[60%]">
				<DialogHeader>
					<DialogTitle className="text-bdpurple">Create a News</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex gap-1 flex-row w-full overflow-hidden justify-between"
					>
						<div className="w-[40%] flex flex-col gap-5">
							<FormField
								control={form.control}
								name="poster"
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
												maxLength={30}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="flex gap-1 flex-col w-[58%]">
							<FormField
								control={form.control}
								name="content"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="font-medium text-md w-full text-start">
											Content
										</FormLabel>
										<FormControl className="w-full">
											<InputTextEdit {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<DialogFooter className="flex w-full justify-end items-end">
								<Button
									type="submit"
									className="rounded-sm shadow-md p-2 font-semibold text-base"
									variant={"bdlight"}
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
