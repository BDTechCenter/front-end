import z from "zod";

export const commentSchema = z.object({
	content: z
		.string({ required_error: "Comment is required" })
		.min(10, { message: "Your comment must be at least 10 characters." })
		.max(500, { message: "Comments can be a maximum of 500 characters." }),
});
