"use client";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { ControllerRenderProps, UseFormReturn } from "react-hook-form";
import { useState } from "react";

interface ICombobox {
	title: string;
	items: { value: string; label: string }[];
	form: UseFormReturn<any>;
	field: ControllerRenderProps<any>;
}

export function Combobox({ title, items, form, field }: ICombobox) {
	const [open, setOpen] = useState(false);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-[200px] justify-between"
				>
					{field.value
						? items.find((item) => item.value === field.value)?.label
						: `Select ${title}...`}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput placeholder={`Search ${title}...`} />
					<CommandEmpty>No {title} found.</CommandEmpty>
					<CommandGroup>
						{items.map((item) => (
							<CommandItem
								key={item.value}
								value={item.value}
								onSelect={() => {
									form.setValue(`${item}`, item.value);
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
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
