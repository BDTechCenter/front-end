"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function StatusTitle() {
	const filterStatus = useSearchParams().get("status");
	const status = filterStatus ? filterStatus : "published";
	const [title, setTitle] = useState("Error");

	useEffect(() => {
		if (status === "archived") {
			setTitle("Archived");
		}
		if (status === "published") {
			setTitle("Published");
		}
	}, [status, filterStatus]);

	return (
		<h1 className="font-semibold text-lg md:text-xl 2xl:text-2xl">{title}</h1>
	);
}
