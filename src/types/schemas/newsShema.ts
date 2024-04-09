import z from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
	"image/jpeg",
	"image/jpg",
	"image/png",
	"image/webp",
];

export const newsSchema = z.object({
	image: z
		.instanceof(File, { message: "The poster must be an image file." })
		.refine(
			(file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
			"Only .jpg, .jpeg, .png and .webp formats are supported."
		)
		.refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
		.nullable()
		.optional(),
	title: z
		.string()
		.min(3, { message: "Title must be at least 3 characters." })
		.max(100, { message: "Title must be a maximum of 100 characters." }),
	tags: z
		.array(z.string().max(30, { message: "Max characters of tags is 30." }))
		.max(7, { message: "You can add up to 7 tags." })
		.optional(),
	body: z
		.string({ required_error: "Content is required." })
		.min(10, { message: "Content must be at least 10 characters." }),
});

export const searchSchema = z.object({
	search: z
		.string({ required_error: "Search terms is required" })
		.trim()
		.min(1, "Search terms is required")
		.max(70 - 1, {
			message: `Search terms can be a maximum of ${70} characters.`,
		}),
});