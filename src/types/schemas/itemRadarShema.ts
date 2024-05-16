import { z } from "zod";
import { Expectation, QuadrantsID, RingName } from "@/api/types/radar";

export const itemRadarSchema = z.object({
	title: z.string().max(30, { message: "Max characters of title is 30." }),
	ring: z.nativeEnum(RingName, { required_error: "Ring is required." }),
	expectation: z.nativeEnum(Expectation, {
		required_error: "Expectation is required.",
	}),
	quadrant: z.nativeEnum(QuadrantsID, {
		required_error: "Quadrant is required.",
	}),
	body: z
		.string({ required_error: "Content is required." })
		.min(10, { message: "Content must be at least 10 characters." }),
});
