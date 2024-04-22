"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function LinkFilterNewsUser() {
	const searchParams = useSearchParams();

	useEffect(() => {}, [searchParams]);

	const [nameButton, setNameButton] = useState("Archived"); // Published
	const [nameUrl, setNameUrl] = useState("archived"); // /

	return (
		<Link href={`user/${nameUrl}`}>
			<Button
				className=" border rounded-sm p-5 font-semibold text-lg"
				variant={"bdlight"}
			>
				{nameButton}
			</Button>
		</Link>
	);
}
