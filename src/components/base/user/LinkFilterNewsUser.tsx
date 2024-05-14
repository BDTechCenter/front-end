"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function LinkFilterNewsUser() {
	const searchParams = useSearchParams();

	const filterNews = searchParams.get("news")
	const status = filterNews ? filterNews : 'published'
	const [nameButton, setNameButton] = useState('Error');

	useEffect(() => {
		if(status === "published"){
			setNameButton('archived')
		}
		else if(status === "archived"){
			setNameButton('published')
		}

	}, [searchParams, status]);
	

	return (
		<Link href={`user?news=${nameButton}`}>
			<Button
				className=" border rounded-sm p-5 font-semibold text-lg"
				variant={"bdlight"}
			>
				{nameButton}
			</Button>
		</Link>
	);
}
