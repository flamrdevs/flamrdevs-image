import type { Color, Theme } from "./types";
import COLORS from "./colors";

const COLOR = ["neutral", "primary", "success", "info", "warning", "danger"] as const satisfies readonly Color[];
const COLOR_DEFAULT = COLOR[0] satisfies Color;
const THEME = ["dark", "light"] as const satisfies readonly Theme[];
const THEME_DEFAULT = THEME[0] satisfies Theme;

const isColor = (value?: unknown): value is Color => COLOR.includes(String(value) as Color);
const isTheme = (value?: unknown): value is Theme => THEME.includes(String(value) as Theme);

const getColor = (value?: unknown) => (isColor(value) ? value : COLOR_DEFAULT);
const getTheme = (value?: unknown) => (isTheme(value) ? value : THEME_DEFAULT);

const select = (color?: unknown, theme?: unknown) => COLORS[getColor(color)][getTheme(theme)];

export { COLOR, COLOR_DEFAULT, THEME, THEME_DEFAULT };
export { isColor, isTheme, getColor, getTheme };
export { select };
