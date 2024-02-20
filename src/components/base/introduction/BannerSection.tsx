import { Button } from "@/components/ui/button";
import NavBar from "../common/NavBar";
import Image from "next/image";
import { introductionData } from "@/api/introduction";

export default function BannerSection() {
  const data = introductionData["banner-section"]

	return (
		<section className="max-h-screen h-screen bg-bddarkgray">
			<NavBar variant="black" />
			<div className="p-16 flex items-center">
				<div className="w-full flex flex-col gap-5">
					<h1>{data.title}<span>{data.titleArea}</span></h1>
					<p>{data.subtitle}</p>
					<Button>{data.buttonTxt}</Button>
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
