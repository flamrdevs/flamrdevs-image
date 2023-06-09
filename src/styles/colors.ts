import type { Color, Theme } from "./types";

const COLORS = {
	neutral: {
		light: {
			1: "#fcfcfc",
			2: "#f8f8f8",
			3: "#f3f3f3",
			4: "#ededed",
			5: "#e8e8e8",
			6: "#e2e2e2",
			7: "#dbdbdb",
			8: "#c7c7c7",
			9: "#8f8f8f",
			10: "#858585",
			11: "#6f6f6f",
			12: "#171717",
		},
		dark: {
			1: "#161616",
			2: "#1c1c1c",
			3: "#232323",
			4: "#282828",
			5: "#2e2e2e",
			6: "#343434",
			7: "#3e3e3e",
			8: "#505050",
			9: "#707070",
			10: "#7e7e7e",
			11: "#a0a0a0",
			12: "#ededed",
		},
	},
	primary: {
		light: {
			1: "#fdfcfe",
			2: "#fbfaff",
			3: "#f5f2ff",
			4: "#ede9fe",
			5: "#e4defc",
			6: "#d7cff9",
			7: "#c4b8f3",
			8: "#aa99ec",
			9: "#6e56cf",
			10: "#644fc1",
			11: "#5746af",
			12: "#20134b",
		},
		dark: {
			1: "#17151f",
			2: "#1c172b",
			3: "#251e40",
			4: "#2c2250",
			5: "#32275f",
			6: "#392c72",
			7: "#443592",
			8: "#5842c3",
			9: "#6e56cf",
			10: "#7c66dc",
			11: "#9e8cfc",
			12: "#f1eefe",
		},
	},
	success: {
		light: {
			1: "#fbfefc",
			2: "#f2fcf5",
			3: "#e9f9ee",
			4: "#ddf3e4",
			5: "#ccebd7",
			6: "#b4dfc4",
			7: "#92ceac",
			8: "#5bb98c",
			9: "#30a46c",
			10: "#299764",
			11: "#18794e",
			12: "#153226",
		},
		dark: {
			1: "#0d1912",
			2: "#0c1f17",
			3: "#0f291e",
			4: "#113123",
			5: "#133929",
			6: "#164430",
			7: "#1b543a",
			8: "#236e4a",
			9: "#30a46c",
			10: "#3cb179",
			11: "#4cc38a",
			12: "#e5fbeb",
		},
	},
	info: {
		light: {
			1: "#fbfdff",
			2: "#f5faff",
			3: "#edf6ff",
			4: "#e1f0ff",
			5: "#cee7fe",
			6: "#b7d9f8",
			7: "#96c7f2",
			8: "#5eb0ef",
			9: "#0091ff",
			10: "#0081f1",
			11: "#006adc",
			12: "#00254d",
		},
		dark: {
			1: "#0f1720",
			2: "#0f1b2d",
			3: "#10243e",
			4: "#102a4c",
			5: "#0f3058",
			6: "#0d3868",
			7: "#0a4481",
			8: "#0954a5",
			9: "#0091ff",
			10: "#369eff",
			11: "#52a9ff",
			12: "#eaf6ff",
		},
	},
	warning: {
		light: {
			1: "#fdfdf9",
			2: "#fffce8",
			3: "#fffbd1",
			4: "#fff8bb",
			5: "#fef2a4",
			6: "#f9e68c",
			7: "#efd36c",
			8: "#ebbc00",
			9: "#f5d90a",
			10: "#f7ce00",
			11: "#946800",
			12: "#35290f",
		},
		dark: {
			1: "#1c1500",
			2: "#221a00",
			3: "#2c2100",
			4: "#352800",
			5: "#3e3000",
			6: "#493c00",
			7: "#594a05",
			8: "#705e00",
			9: "#f5d90a",
			10: "#ffef5c",
			11: "#f0c000",
			12: "#fffad1",
		},
	},
	danger: {
		light: {
			1: "#fffcfc",
			2: "#fff8f8",
			3: "#ffefef",
			4: "#ffe5e5",
			5: "#fdd8d8",
			6: "#f9c6c6",
			7: "#f3aeaf",
			8: "#eb9091",
			9: "#e5484d",
			10: "#dc3d43",
			11: "#cd2b31",
			12: "#381316",
		},
		dark: {
			1: "#1f1315",
			2: "#291415",
			3: "#3c181a",
			4: "#481a1d",
			5: "#541b1f",
			6: "#671e22",
			7: "#822025",
			8: "#aa2429",
			9: "#e5484d",
			10: "#f2555a",
			11: "#ff6369",
			12: "#feecee",
		},
	},
} satisfies Record<Color, Record<Theme, Record<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12", string>>>;

export default COLORS;
