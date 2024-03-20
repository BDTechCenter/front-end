import z from "zod";

export const commentSchema = z.object({
	content: z
		.string({ required_error: "Comment is required" })
		.min(3, { message: "Your comment must be at least 3 characters." }),
});
