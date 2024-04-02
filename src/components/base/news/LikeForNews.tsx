import React from "react";
import { BiSolidUpvote } from "react-icons/bi";
import { BiUpvote } from "react-icons/bi";
import { msalInstance } from "@/lib/sso/msalInstance";
import { useState } from "react";
import { toast } from "react-toastify";
import { useMutationNewsUpvote } from "@/api/hooks/news/queries";

interface LikeForNewsProps {
	id: string;
}

export default function LikeForNews({ id }: LikeForNewsProps) {
	const { mutate } = useMutationNewsUpvote();

	const [like, setLike] = useState(false);

	const empty = null;

	const useLikePress = async () => {
		mutate(
			{ empty, id },
			{
				onSuccess: (data) => {
					setLike(true);
					toast.success("Upvote added with success", {
						position: "top-right",
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
					});
				},
				onError: (error) => {
					toast.error(error.message, {
						position: "top-right",
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
					});
				},
			}
		);
	};

	return (
		<div className="w-full items-center bg-transparent">
			{!like ? (
				<BiUpvote
					size={22}
					color="#262626"
					onClick={useLikePress}
					className="cursor-pointer"
				/>
			) : (
				<BiSolidUpvote size={22} color="#262626" className="cursor-pointer" />
			)}
		</div>
	);
}
