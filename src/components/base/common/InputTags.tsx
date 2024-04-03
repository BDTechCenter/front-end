import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, KeyboardEvent } from "react";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import { cn } from "@/lib/utils";

export interface InputTagsProps {
	variant: "wrap" | "row";
	onChange: (value: string[]) => void;
}

export default function InputTags({ variant, onChange }: InputTagsProps) {
	const [value, setValue] = useState('')
	const [tags, setTags] = useState<string[]>([]);
	const MaxTegs = 7;

	const errorToast = () => {
		toast.error("Cannot add tag", {
			position: "top-right",
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	};

	const addTags = () => {
		if (tags.length < MaxTegs && value !== '') {
			setTags([...tags, value]);
			onChange([...tags, value]);
		} else {
			errorToast();
		}
		setValue('')
	};

	const removeTags = (index: number) => {
		setTags([...tags.filter((_, i) => i !== index)]);
		onChange([...tags.filter((_, i) => i !== index)]);
	};

	return (
		<div>
			<div className="w-full flex flex-row gap-3">
				<Input placeholder="Search your tags..." maxLength={35} value={value} onChange={setValue} />
				<Button type="button" className="rounded-sm bg-bdpurple hover:bg-bdpurple/90" onClick={addTags}>tag</Button>
			</div>
			<div
				className={cn("flex p-1 gap-2 items-center my-5 overflow-y-hidden overflow-x-scroll", variant === "wrap" ? "flex-wrap" : "flex-row")}
			>
				{tags.map((tag, index) => (
					<span
						className="flex gap-1 flex-row items-center p-2 rounded-sm border border-bdlightpurple/80"
						key={index}
					>
						<p className="font-medium text-sm">{tag}</p>
						<IoMdClose
							onClick={() => {
								removeTags(index);
							}}
							className="text-bdlightpurple cursor-pointer"
						/>
					</span>
				))}
			</div>
		</div>
	);
}
