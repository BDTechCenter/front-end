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
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { searchSchema } from "@/types/schemas/newsShema";
import { UpdateUrlFilter } from "@/services/filter";

export default function SearchBar() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const tagsUrl = searchParams.get("tags");
	const titleUrl = searchParams.get("title");
	const pathnameDefault = usePathname();

	function onSubmit(values: z.infer<typeof searchSchema>) {
		UpdateUrlFilter({
			filters: {
				filterTag: titleUrl,
				filterTag2: tagsUrl,
				type: "title",
				searchParams: searchParams,
				pathnameDefault: pathnameDefault,
				values: values.search,
				router: router,
			},
		});
	}

	const form = useForm<z.infer<typeof searchSchema>>({
		mode: "all",
		resolver: zodResolver(searchSchema),
	});

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
									maxLength={70}
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
					{searchParams.has("title") || searchParams.has("tags") ? (
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
