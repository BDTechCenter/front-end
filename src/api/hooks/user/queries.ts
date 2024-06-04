import {
	QueryFunctionContext,
	useMutation,
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiArticle, apiRadar } from "@/services/api";
import {
	Article,
	ContentArticles,
	ContentComment,
} from "@/api/types/article/type";
import { MyTechItem } from "@/api/types/radar";

// Article
// GET user articles
export async function getUserArticles(ctx: QueryFunctionContext) {
	const [, status] = ctx.queryKey;
	const filter = status === undefined ? "published" : status;
	const { data } = await apiArticle.get<ContentArticles>(
		`articles/me?sortBy=${filter}`
	);
	return data;
}

export function useFetchGetUserArticles(status?: string) {
	return useQuery<ContentArticles, Error>({
		queryKey: ["userArticle", status],
		queryFn: getUserArticles,
	});
}

// PATCH user article
async function patchArticle({
	articleObject,
	id,
}: {
	articleObject: FormData;
	id: string;
}) {
	const promise = apiArticle.patch<Article>(`articles/${id}`, articleObject);

	toast.promise(promise, {
		loading: "Updating article",
		success: "Updated article with success",
		error: (error) => {
			console.log(error);
			return error?.response?.data
				? `${error.status}:\n${error.response.data.message}`
				: `${error.message}`;
		},
	});

	return await promise;
}

export function useMutationPatchArticle() {
	return useMutation({
		mutationFn: patchArticle,
	});
}

// ARCHIVE user article
async function patchArchive(id: string) {
	const archive = apiArticle.patch<Article>(`articles/${id}/archive`);

	toast.promise(archive, {
		loading: "Deleting article",
		success: "Article deleted with success",
		error: (error) => {
			console.log(error);
			return error?.response?.data
				? `${error.status}:\n${error.response.data.message}`
				: `${error.message}`;
		},
	});
	return await archive;
}

async function patchPublish(id: string) {
	const publish = apiArticle.patch<Article>(`articles/${id}/publish`);

	toast.promise(publish, {
		loading: "Publishing article",
		success: "Article published with success",
		error: (error) => {
			console.log(error);
			return error?.response?.data
				? `${error.status}:\n${error.response.data.message}`
				: `${error.message}`;
		},
	});
	return await publish;
}

export function useMutationPatchArchive() {
	return useMutation({
		mutationFn: patchArchive,
	});
}

export function useMutationPatchPublish() {
	return useMutation({
		mutationFn: patchPublish,
	});
}

// Article
// GET user comments
export async function getUserComments() {
	const { data } = await apiArticle.get<ContentComment>(`comments/me`);
	return data;
}

export function useFetchGetUserComments() {
	return useQuery<ContentComment, Error>({
		queryKey: ["userComments"],
		queryFn: getUserComments,
	});
}

async function deleteComment(id: number) {
	const deleteComment = apiArticle.delete(`comments/${id}`);

	toast.promise(deleteComment, {
		loading: "Deleting Comment",
		success: "Delete Comment with success",
		error: (error) => {
			console.log(error);
			return "Delete Comment Error";
		},
	});
	return await deleteComment;
}

export function useMutationDeleteComment() {
	return useMutation({
		mutationFn: deleteComment,
	});
}

// Tech Radar
// GET user tech
export async function getUserTech() {
	const { data } = await apiRadar.get<MyTechItem[]>(`items/me`);
	return data;
}

export function useFetchGetUserTech() {
	return useQuery<MyTechItem[], Error>({
		queryKey: ["userTech"],
		queryFn: getUserTech,
	});
}

// PATCH archive user tech
async function patchArchiveTech(id: string) {
	const archiveTech = apiRadar.patch(`items/${id}/archive`);

	toast.promise(archiveTech, {
		loading: "Archiving Tech",
		success: "Tech archived with success",
		error: (error) => {
			console.log(error);
			return "Archive Tech Error";
		},
	});
	return await archiveTech;
}

export function useMutationArchiveTech() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: patchArchiveTech,
		onSuccess: (_) => {
			queryClient.invalidateQueries({
				queryKey: ["userTech"],
				refetchType: "active",
			});
		},
	});
}

// PATCH publich user tech
async function patchPublishTech(id: string) {
	const publishTech = apiRadar.patch(`items/${id}/archive`);

	toast.promise(publishTech, {
		loading: "Publishing Tech",
		success: "Tech published with success",
		error: (error) => {
			console.log(error);
			return "Publish Tech Error";
		},
	});
	return await publishTech;
}

export function useMutationPublishTech() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: patchPublishTech,
		onSuccess: (_) => {
			queryClient.invalidateQueries({
				queryKey: ["userTech"],
				refetchType: "active",
			});
		},
	});
}

// GET tech admin review
export async function getTechReview() {
	const { data } = await apiRadar.get<MyTechItem>(`items/review`);
	return data;
}

export function useFetchGetTechReview() {
	return useQuery<MyTechItem, Error>({
		queryKey: ["techReview"],
		queryFn: getTechReview,
	});
}
