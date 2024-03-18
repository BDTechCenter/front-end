import { Error } from "@/api/types/all/type";
import Image from "next/image";


interface ImageErrorProps {
	data: Error;
}

export default function ImageError({ data }: ImageErrorProps) {
	return (
		<div className="flex w-full h-full my-10 flex-col items-center justify-center">
			<div className="w-1/3 f-1/3">
				<Image
					className="w-full h-full"
					src={data.img}
					alt="Erro"
					height="800"
					width="800"
				/>
			</div>
			<h1 className="text-xl 2xl:text-2xl font-semibold text-bdlightpurple">
				{data.text}
			</h1>
		</div>
	);
}
