import NavBar from "@/components/base/common/NavBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
	return (
		<main className="w-full">
			<section className="max-h-screen h-screen bg-bddarkgray">
				<NavBar variant="black" />
				<div className="p-16 flex items-center">
					<div className="w-full">

          </div>
          <div className="w-[70%] h-full">
            <Image className="w-full h-full" src="/bdsquaresI.png" alt="BD Squares" height="1000" width="1000" />
          </div>
				</div>
			</section>
		</main>
	);
}
