import { Button } from "@/components/ui/button";
import NavBar from "@/components/base/common/NavBar";
import TopBanner from "@/components/base/common/TopBanner";


export default function testPage2() {
	return (
		<main className="w-full">
			<NavBar variant="black" />
			<TopBanner img={true}/>
		</main>
	);
}

{/* <BannerAllPage text={0} img={true}/> */ }

{/* <BannerAllPage text={0} img={true} className="flex items-center justify-center">
				<Button
						variant="bdlight"
						className="rounded-lg w-1/3 text-xl font-bold py-6 2xl:text-2xl"
					>
						test
					</Button>
			</BannerAllPage> */}

// export const homeData = {
//   bannerHome: {
//     text: (
//       <p>
//         Follow the main <span className='text-bdlightpurple'>news</span> of the moment...
//       </p>
//     )
//   },
//   news: [
//     {
//       text: "Innovation in the development area using Python",
//       img: "/imgNews.png",
//       data: "February 19"
//     },
//     {
//       text: "Innovation in the development area using Python",
//       img: "/imgNews.png",
//       data: "February 19"
//     },
//     {
//       text: "Innovation in the development area using Python",
//       img: "/imgNews.png",
//       data: "February 19"
//     }
//   ],
//   buttonText: {
//     text: "Read More"
//   }
// };


