"use client";

import { Button } from "@/components/ui/button";
import {
	FormControl,
	FormField,
	FormItem,
	Form,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MdFilterAltOff } from "react-icons/md";
import ModalFilter from "../modal/ModalFilter";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";

const MAX_LENGTH = 70;

const searchSchema = z.object({
	search: z
		.string({ required_error: "Search terms is required" })
		.trim()
		.min(1, "Search terms is required")
		.max(MAX_LENGTH - 1, {
			message: `Search terms can be a maximum of ${MAX_LENGTH} characters.`,
		}),
});

export default function SearchBar() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const tagsUrl = searchParams.get("tags");
	const titleUrl = searchParams.get("title");
	const pathname = window.location.search;

	const form = useForm<z.infer<typeof searchSchema>>({
		mode: "all",
		resolver: zodResolver(searchSchema),
	});

	function onSubmit(values: z.infer<typeof searchSchema>) {
		router.push(
			tagsUrl ? `${pathname}&title=${values.search}` : `?title=${values.search}`
		);
	}

	useEffect(() => {
		if (form.formState.isSubmitSuccessful) {
			form.reset({ search: "" });
		}
	}, [form, form.formState, form.reset]);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex gap-5 w-full items-center bg-white shadow-md p-3 rounded-sm"
			>
				<FormField
					control={form.control}
					name="search"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormControl>
								<Input
									type="search"
									placeholder="Search Here..."
									className="bg-zinc-100/60 border-0 focus:ring-0"
									{...field}
									maxLength={MAX_LENGTH}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="rounded-sm bg-bdpurple hover:bg-bdpurple/90"
				>
					Search
				</Button>
				<div className="flex flex-row gap-3 justify-center items-center">
					<ModalFilter />
					{tagsUrl || titleUrl ? (
						<Link href={"/news"}>
							<MdFilterAltOff color="#DC2626" size={20} />
						</Link>
					) : (
						<></>
					)}
				</div>
			</form>
		</Form>
	);
}
