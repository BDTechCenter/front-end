import Image from "next/image";
import { cn } from "@/lib/utils";

export default function LoadingIndicator({
	className,
	dark,
}: {
	className?: string | undefined;
	dark?: boolean;
}) {
	return !dark ? (
		<Image
			unoptimized
			alt="Loading"
			src="/loading-light.gif"
			width={100}
			height={100}
			className={cn(className)}
		/>
	) : (
		<Image
			unoptimized
			alt="Loading"
			src="/loading-dark.gif"
			width={100}
			height={100}
			className={cn(className)}
		/>
	);
}
