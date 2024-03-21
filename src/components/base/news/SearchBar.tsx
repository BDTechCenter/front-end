import { Button } from "@/components/ui/button";
import {
	FormControl,
	FormField,
	FormItem,
	Form,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdTune } from "react-icons/md";
import z from "zod";

const MAX_LENGTH = 50;

const searchSchema = z.object({
	search: z
		.string()
		.trim()
		.max(MAX_LENGTH - 1, {
			message: `Search terms can be a maximum of ${MAX_LENGTH} characters.`,
		}),
});

export default function SearchBar() {
	const form = useForm<z.infer<typeof searchSchema>>({
		mode: "all",
		resolver: zodResolver(searchSchema),
	});

	function onSubmit(values: z.infer<typeof searchSchema>) {
		console.log(values);
	}

	useEffect(() => {
		if (form.formState.isSubmitSuccessful) {
			form.reset({ search: "" })
		}
	}, [form, form.formState, form.reset])

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
				<div>
					<MdTune color="#7A2572" size={27} />
				</div>
			</form>
		</Form>
	);
}

