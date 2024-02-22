import { Button } from "@/components/ui/button";
import NavBar from "../common/NavBar";
import Image from "next/image";
import { introductionData } from "@/api/introduction";
import { title } from "process";

interface BannerSectionProps {
	data: {
		title: string;
		titleArea: string;
		subtitle: string;
		buttonTxt: string;
	} | undefined
}

export default function BannerSection({ data }: BannerSectionProps) {
	return (
		<section className="max-h-screen h-screen bg-bddarkgray">
			<NavBar variant="black" />
			<div className="p-16 flex items-center">
				<div className="w-full flex flex-col gap-9">
					<h1 className="w-[90%] text-white text-5xl leading-[1.2] font-bold 2xl:text-7xl">
						{data?.title}
						<span className="text-bdlightpurple">{data?.titleArea}</span>
					</h1>
					<p className="text-white font-light text-xl w-[80%] 2xl:text-2xl">
						{data?.subtitle}
					</p>
					<Button
						variant="bdlight"
						className="rounded-lg w-1/3 text-xl font-bold py-6 2xl:text-2xl"
					>
						{data?.buttonTxt}
					</Button>
				</div>
				<div className="w-[65%] h-full">
					<Image
						className="w-full h-full"
						src="/bdsquaresI.png"
						alt="BD Squares"
						height="1000"
						width="1000"
					/>
				</div>
			</div>
		</section>
	);
}
