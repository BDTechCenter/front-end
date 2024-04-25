import { FlagType } from "@/api/types/radar";
import { cn } from "@/lib/utils";

interface ItemFlag {
	flag: FlagType;
}

export default function Flag({
	item,
	short = false,
}: {
	item: ItemFlag;
	short?: boolean;
}) {
	const ucFirst = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

	if (item.flag !== FlagType.default) {
		let name = String(item.flag);
		let title = ucFirst(item.flag);
		if (short === true) {
			name = title[0];
		}

		return (
			<span
				className={cn(
					"text-xs py-1 px-2 relative rounded-full align-middle left-2 text-black",
					item.flag === FlagType.new ? "bg-red-500" : "bg-cyan-500"
				)}
				title={title}
			>
				{name.toUpperCase()}
			</span>
		);
	}
}
