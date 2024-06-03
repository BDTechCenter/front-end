"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function LinkFilterUser() {
	const searchParams = useSearchParams();

	const filterStatus = searchParams.get("status");
	const status = filterStatus ? filterStatus : "published";
	const [nameButton, setNameButton] = useState("Error");
	const [href, setHref] = useState("Error");

	useEffect(() => {
		if (status === "published") {
			setNameButton("See Archived");
			setHref("archived");
		} else if (status === "archived") {
			setNameButton("See Published");
			setHref("published");
		}
	}, [searchParams, status]);

	return (
		<Link href={`user?status=${href}`}>
			<Button
				className=" border rounded-sm p-5 font-semibold text-lg"
				variant={"bdlight"}
			>
				{nameButton}
			</Button>
		</Link>
	);
}
