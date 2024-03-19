import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdTune } from "react-icons/md";
import ModalFilter from "../modal/ModalFilter";

export default function SearchBar() {
	return (
		<div className="flex bg-white shadow-md p-3 items-center gap-5 rounded-sm">
			<Input onChange={()=>{}} type="search" placeholder="Search Here..." className="bg-zinc-100/60 border-0 focus:ring-0" />
			<Button className="rounded-sm bg-bdpurple hover:bg-bdpurple/90">
				Search
			</Button>
			<div>
				<ModalFilter/>
			</div>
		</div>
	);
}
