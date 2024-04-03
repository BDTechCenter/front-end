import Image from "next/image";

export default function BannerIntroduction() {
	return (
		<section className="flex w-full gap-8 px-[10%] py-10 bg-bdpurple my-16 flex-row items-center justify-center lg:px-[20%] max-sm:flex-col">
			<Image
				className="w-60 h-60 2xl:w-80 2xl:h-80"
				src={bannerInformate.img}
				alt="BD Img Introduction"
				height={100}
				width={100}
			/>
			<p className=" text-[#FFF] md:text-lg 2xl:text-xl text-left">
				{bannerInformate.text}
			</p>
		</section>
	);
}

const bannerInformate = {
	img: "/inn.gif",
	text: "At BD/INN our main objective is innovation, and the use of new emerging technologies in projects, we are willing to adapt to the new, and bring change and innovation to the rest of Bosch.",
};
