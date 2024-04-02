import React from "react";
import { BiSolidUpvote } from "react-icons/bi";
import { BiUpvote } from "react-icons/bi";
import { msalInstance } from "@/lib/sso/msalInstance";
import { useState } from "react";
import { useMutationPatchCommentUpvote } from "@/api/hooks/news/queries";
import { toast } from "react-toastify";

interface LikeForNewsProps {
	id: number;
	alreadyUpVoted: boolean;
}

export default function LikeForComment({
	id,
	alreadyUpVoted,
}: LikeForNewsProps) {
	const { mutate } = useMutationPatchCommentUpvote();

	const user = msalInstance.getActiveAccount();
	const token = user ? user.idToken : "";
	const [like, setLike] = useState(alreadyUpVoted);

	const useLikePress = async () => {
			mutate(
				{ id: id, token: token },
				{
					onSuccess: (data) => {
						toast.success("upvote successfully", {
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
			setLike(!like);
	};

	return (
		<div className="w-full items-center bg-transparent">
			{!like ? (
				<BiUpvote
					size={18}
					color="#262626"
					onClick={useLikePress}
					className="cursor-pointer"
				/>
			) : (
				<BiSolidUpvote
					size={18}
					onClick={useLikePress}
					color="#262626"
					className="cursor-pointer"
				/>
			)}
		</div>
	);
}
