import Link from "next/link";
import Footer from "@/components/base/common/Footer";
import NavBar from "@/components/base/common/NavBar";
import { Button } from "@/components/ui/button";

export default function NotFound() {
	return (
		<main className="h-screen max-h-screen">
			<NavBar variant="white" />
			<section className="flex flex-col items-center justify-center h-full gap-6">
				<h1 className="text-8xl text-foreground font-bold">404</h1>
				<p className="text-lg text-foreground">Oops! Page not found.</p>
				<Link href="/">
					<Button variant="bdpurple">Go Home</Button>
				</Link>
			</section>
			<Footer />
		</main>
	);
}
