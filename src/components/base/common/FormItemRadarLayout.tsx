import { FormTypeItem } from "@/api/types/all/type";
import { Button } from "@/components/ui/button";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { itemRadarSchema } from "@/types/schemas/itemRadarShema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import InputTextEdit from "./InputTextEdit";
import { Combobox } from "./Combobox";
import { comboboxOpts } from "@/services/radarConstants";

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
				<FormProvider {...form}>
					<form
						id={formData.idForm}
						onSubmit={form.handleSubmit(formData.OnSubmit)}
						className="flex gap-1 flex-col w-full justify-between overflow-y-scroll overflow-x-scroll p-2"
					>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="font-medium text-md">Title</FormLabel>
									<FormControl>
										<Input
											placeholder="Item title here..."
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
										Content
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
				</FormProvider>
			</DialogContent>
		</Dialog>
	);
}
