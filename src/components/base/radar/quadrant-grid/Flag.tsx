import { useTranslation } from "react-i18next";
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
	const { t } = useTranslation();
	const ucFirst = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

	if (item.flag !== FlagType.default) {
		let name = t(`flags.${item.flag}`);
		let title = ucFirst(item.flag);
		if (short === true) {
			name = title[0];
		}

		return (
			<span
				className={cn(
					"text-xs inline-block py-1 px-2 relative rounded-lg align-top -mt-0.5 left-1 text-white",
					item.flag === FlagType.new ? "text-red-500" : "text-cyan-500"
				)}
				title={title}
			>
				{name.toUpperCase()}
			</span>
		);
	}
}
