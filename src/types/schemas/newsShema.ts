import z from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
	"image/jpeg",
	"image/jpg",
	"image/png",
	"image/webp",
];

export const newsSchema = z.object({
	poster: z
		.instanceof(File, { message: "The poster must be a image" })
		.refine(
			(file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
			"Only .jpg, .jpeg, .png and .webp formats are supported."
		)
		.refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
		.optional(),

	title: z.string().min(3, { message: "Title must be at least 2 characters." }),
	tags: z.array(z.string()).optional(),
	content: z
		.string({ required_error: "Content is required" })
		.min(3, { message: "Content must be at least 3 characters." }),
});
