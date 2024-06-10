import Image from "next/image";
import { Error } from "@/api/types/all/type";

interface ImageErrorProps {
	data: Error;
}

export default function ImageError({ data }: ImageErrorProps) {
	return (
		<div className="flex w-full h-full my-10 flex-col items-center justify-center">
			<div className="flex justify-center items-center w-full 2xl:w-1/2 h-full">
				<Image
					className="w-1/2 h-full"
					src={data.img}
					alt="Erro"
					height="500"
					width="500"
				/>
			</div>
			<h1 className="text-xl 2xl:text-2xl font-semibold text-bdlightpurple">
				{data.text}
			</h1>
		</div>
	);
}
