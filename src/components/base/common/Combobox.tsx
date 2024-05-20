"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { ControllerRenderProps, UseFormReturn } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { FormControl } from "@/components/ui/form";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

interface ICombobox {
	title: string;
	items: any[];
	form: UseFormReturn<any>;
	field: ControllerRenderProps<any>;
}

export function Combobox({ title, items, form, field }: ICombobox) {
	const [open, setOpen] = useState(false);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<FormControl>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open}
						className="flex justify-between"
					>
						{field.value
							? items.find((item) => item.value === field.value)?.label
							: `Select ${title}...`}
						<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</FormControl>
			</PopoverTrigger>
			<PopoverContent className="p-0">
				<Command>
					<CommandInput placeholder={`Search ${title}...`} />
					<CommandEmpty>No {title} found.</CommandEmpty>
					<CommandList>
						{items.map((item) => (
							<CommandItem
								key={item.value}
								value={item.value}
								onSelect={() => {
									form.setValue(`${field.name}`, item.value);
									setOpen(false);
								}}
							>
								<Check
									className={cn(
										"mr-2 h-4 w-4",
										item.value === field.value ? "opacity-100" : "opacity-0"
									)}
								/>
								{item.label}
							</CommandItem>
						))}
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
