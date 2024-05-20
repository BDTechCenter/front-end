import { zodResolver } from "@hookform/resolvers/zod";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormTypeItem } from "@/api/types/all/type";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { itemRadarSchema } from "@/types/schemas/itemRadarShema";
import InputTextEdit from "./InputTextEdit";
import { Combobox } from "./Combobox";

interface ModalCreateItemRadarProps {
	formData: FormTypeItem;
}

export function FormItemRadarLayout({ formData }: ModalCreateItemRadarProps) {
	const [open, setOpen] = useState(formData.open);

	const form = useForm<z.infer<typeof itemRadarSchema>>({
		defaultValues: {
			title: formData.defaultValues?.title,
			ring: formData.defaultValues?.ring,
			expectation: formData.defaultValues?.expectation,
			quadrant: formData.defaultValues?.quadrant,
			body: formData.defaultValues?.body,
		},
		resolver: zodResolver(itemRadarSchema),
	});

	useEffect(() => {
		if (form.formState.isSubmitSuccessful) {
			form.reset();
			setOpen(false);
		}
	}, [form, form.formState, form.reset]);

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
					<DialogTitle className="text-bdpurple">
						Create a Item For Radar
					</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form
						id={formData.idForm}
						onSubmit={form.handleSubmit(formData.OnSubmit)}
						className="flex gap-3 flex-col w-full justify-between overflow-y-scroll overflow-x-scroll p-2"
					>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="font-medium text-md">Title</FormLabel>
									<FormControl>
										<Input
											placeholder="Item title..."
											maxLength={30}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="quadrant"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="font-medium text-md w-full text-start">
										Quadrant
									</FormLabel>
									<FormControl>
										<Combobox
											field={field}
											form={form}
											items={comboboxOpts.quadrant}
											title="Quadrant"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="ring"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="font-medium text-md w-full text-start">
										Ring
									</FormLabel>
									<FormControl>
										<Combobox
											field={field}
											form={form}
											items={comboboxOpts.ring}
											title="Ring"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="expectation"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="font-medium text-md w-full text-start">
										Expectation
									</FormLabel>
									<FormControl>
										<Combobox
											field={field}
											form={form}
											items={comboboxOpts.expectation}
											title="Expectation"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="body"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="font-medium text-md w-full text-start">
										Description
									</FormLabel>
									<FormControl>
										<InputTextEdit {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<DialogFooter>{formData.alertSubmit}</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}

export const comboboxOpts = {
	ring: [
		{
			label: "Adopt",
			value: "ADOPT",
		},
		{
			label: "Trial",
			value: "TRIAL",
		},
		{
			label: "Observe",
			value: "OBSERVE",
		},
		{
			label: "Hold",
			value: "HOLD",
		},
	],
	expectation: [
		{
			label: "Unknown",
			value: "UNKNOWN",
		},
		{
			label: "0 - 2",
			value: "ZERO_TWO",
		},
		{
			label: "2 - 5",
			value: "TWO_FIVE",
		},
		{
			label: "5 - 10",
			value: "FIVE_TEN",
		},
	],
	quadrant: [
		{
			label: "Languages & Frameworks",
			value: "FIRST_QUADRANT",
		},
		{
			label: "Methods & Patterns",
			value: "SECOND_QUADRANT",
		},
		{
			label: "Platform & Operations",
			value: "THIRD_QUADRANT",
		},
		{
			label: "Tools",
			value: "FOURTH_QUADRANT",
		},
	],
};
