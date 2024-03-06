import Image from "next/image";
import { dataHomePage } from "@/data/home";

export default function BannerIntroduction() {
	return (
		<section className="flex w-full gap-8 h-96 2xl:h-[30rem] bg-bdpurple my-16 flex-row items-center justify-center">
			<Image
				className="w-60 h-60 2xl:w-96 2xl:h-96"
				//@ts-ignore
				src={dataHomePage.bannerInformationArea.img}
				alt="BD Squares"
				height={100}
				width={100}
			/>
			<p className="w-[45%] text-[#FFF] text-xl 2xl:text-2xl text-left">
				{dataHomePage.bannerInformationArea.text}
			</p>
		</section>
	);
}

