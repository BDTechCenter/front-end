import { Button } from "@/components/ui/button";
import NavBar from "../common/NavBar";
import Image from "next/image";

export default function MainBanner() {
	return (
		<section className="max-h-screen h-screen bg-bddarkgray">
			<NavBar variant="black" />
			<div className="p-16 flex items-center">
				<div className="w-full flex flex-col gap-9">
					<h1 className="w-[90%] text-white text-5xl leading-[1.2] font-bold 2xl:text-7xl">
						{mainBanner?.title}
						<span className="text-bdlightpurple">{mainBanner?.titleArea}</span>
					</h1>
					<p className="text-white font-light text-xl w-[80%] 2xl:text-2xl">
						{mainBanner?.subtitle}
					</p>
					<Button
						variant="bdlight"
						className="rounded-lg w-1/3 text-xl font-bold py-6 2xl:text-2xl"
					>
						{mainBanner?.buttonTxt}
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

const mainBanner = {
	title: "Explore the latest news and innovations from ",
	titleArea: "BD/INN",
	subtitle:
		"Discover, share and connect. Be part of the conversation about the future of innovation",
	buttonTxt: "Start into Hub",
};
