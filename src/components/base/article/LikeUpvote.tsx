import React from "react";
import { BiSolidUpvote } from "react-icons/bi";
import { BiUpvote } from "react-icons/bi";
import { useState } from "react";
import toast from "react-hot-toast";
import { msalInstance } from "@/lib/sso/msalInstance";
import { useMutationPatchUpvote } from "@/api/hooks/article/queries";

interface LikeForArticleProps {
	id: string | number;
	alreadyUpVoted: boolean;
	method: "comments" | "news";
	sizeIcon?: number;
}

export default function LikeForArticle({
	id,
	alreadyUpVoted,
	method,
	sizeIcon,
}: LikeForArticleProps) {
	const { mutate } = useMutationPatchUpvote();

	const user = msalInstance.getActiveAccount();
	const token = user ? user.idToken : "";
	const [like, setLike] = useState(alreadyUpVoted);

	const useLikePress = async () => {
		mutate(
			{ id: id, token: token, method: method },
			{
				onSuccess: (data) => {
					!like
						? toast.success("Upvote added with success")
						: toast("Upvote removed with success", { icon: "🔴" });
				},
				onError: (error) => {
					toast.error(error.message);
				},
			}
		);
		setLike(!like);
	};

	return (
		<div className="w-full items-center bg-transparent">
			{!like ? (
				<BiUpvote
					size={sizeIcon}
					color="#262626"
					onClick={useLikePress}
					className="cursor-pointer"
				/>
			) : (
				<BiSolidUpvote
					size={sizeIcon}
					onClick={useLikePress}
					color="#262626"
					className="cursor-pointer"
				/>
			)}
		</div>
	);
}
