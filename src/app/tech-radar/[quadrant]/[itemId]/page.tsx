import ItemContent from "@/components/base/radar/item/ItemContent";
import NavBar from "@/components/base/common/NavBar";
import ItemSidebar from "@/components/base/radar/item/ItemSidebar";

export default function ItemDetailPage() {
	return (
		<main>
			<NavBar variant="white" />
			<section className="flex">
				<ItemSidebar />
				<ItemContent />
			</section>
		</main>
	);
}
