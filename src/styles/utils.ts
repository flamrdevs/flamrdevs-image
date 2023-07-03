import type { Color, Theme } from "./types";
import COLORS from "./colors";
import zod from "~/libs/zod";

const COLOR = ["neutral", "primary", "success", "info", "warning", "danger"] as const satisfies readonly Color[];
const COLOR_DEFAULT = COLOR[0] satisfies Color;
const THEME = ["dark", "light"] as const satisfies readonly Theme[];
const THEME_DEFAULT = THEME[0] satisfies Theme;

const isColor = (value?: unknown): value is Color => COLOR.includes(String(value) as Color);
const isTheme = (value?: unknown): value is Theme => THEME.includes(String(value) as Theme);

const getColor = (value?: unknown) => (isColor(value) ? value : COLOR_DEFAULT);
const getTheme = (value?: unknown) => (isTheme(value) ? value : THEME_DEFAULT);

const select = (color?: unknown, theme?: unknown) => COLORS[getColor(color)][getTheme(theme)];

const ColorSchema = zod
	.enum(COLOR, {
		errorMap: (issue) => {
			if (issue.code === "invalid_enum_value") return { message: "Invalid color name" };
			if (issue.code === "invalid_type") return { message: "Invalid color type" };
			return { message: "Color error" };
		},
	})
	.default(COLOR_DEFAULT);
const ThemeSchema = zod
	.enum(THEME, {
		errorMap: (issue) => {
			if (issue.code === "invalid_enum_value") return { message: "Invalid theme name" };
			if (issue.code === "invalid_type") return { message: "Invalid theme type" };
			return { message: "Theme error" };
		},
	})
	.default(THEME_DEFAULT);

export { COLOR, THEME };
export { isColor, isTheme, getColor, getTheme };
export { select };
export { ColorSchema, ThemeSchema };
