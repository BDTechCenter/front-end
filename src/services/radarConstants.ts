export const chartConfig = {
	size: 800,
	scale: [-16, 16],
	blipSize: 12,
	ringsAttributes: [
		{
			radius: 8,
			arcWidth: 6,
		},
		{
			radius: 11,
			arcWidth: 4,
		},
		{
			radius: 14,
			arcWidth: 2,
		},
		{
			radius: 16,
			arcWidth: 2,
		},
	],
};

export const chartRings = ["ADOPT", "TRIAL", "OBSERVE", "HOLD"];

export const comboboxOpts = {
	ring: [
		{
			label: "Adopt",
			value: "ADOPT",
		},
		{
			label: "Trial",
			value: "TRIAL",
		},
		{
			label: "Observe",
			value: "OBSERVE",
		},
		{
			label: "Hold",
			value: "HOLD",
		},
	],
	expectation: [
		{
			label: "Unknown",
			value: "UNKNOWN",
		},
		{
			label: "0 - 2",
			value: "ZERO_TWO",
		},
		{
			label: "2 - 5",
			value: "TWO_FIVE",
		},
		{
			label: "5 - 10",
			value: "FIVE_TEN",
		},
	],
	quadrant: [
		{
			label: "Languages & Frameworks",
			value: "FIRST_QUADRANT",
		},
		{
			label: "Methods & Patterns",
			value: "SECOND_QUADRANT",
		},
		{
			label: "Platform & Operations",
			value: "THIRD_QUADRANT",
		},
		{
			label: "Tools",
			value: "FOURTH_QUADRANT",
		},
	],
};
