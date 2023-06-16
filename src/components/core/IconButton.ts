import { h } from "~/libs/image";
import type { PropsWithChildren, RootComponent, RootCSSProperties } from "~/libs/image";

import { select } from "~/styles/contract";
import type { Color, Theme } from "~/styles/contract";

import SVGFilterNoise from "~/components/misc/SVGFilterNoise";

type IconButtonProps = PropsWithChildren<{
	color?: Color;
	theme?: Theme;
	width?: number;
	height?: number;
	style?: RootCSSProperties;
}>;

const WIDTH = 28;
const HEIGHT = 28;

const IconButton: RootComponent<IconButtonProps> = ({ color, theme, width, height, style = {}, children }) => {
	const __color__ = select(color, theme);

	return h("button", {
		style: {
			display: "flex",
			position: "relative",
			overflow: "hidden",
			width: typeof width !== "number" || isNaN(width) || width < WIDTH ? WIDTH : width,
			height: typeof height !== "number" || isNaN(height) || height < HEIGHT ? HEIGHT : height,
			color: __color__[12],
			...style,
		},
		children: [
			h("div", {
				style: {
					position: "absolute",
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
					borderRadius: 5,
					backgroundImage: `linear-gradient(135deg, ${__color__[12]}, ${__color__[8]}, ${__color__[6]})`,
				},
			}),
			h("div", {
				style: {
					position: "absolute",
					top: 1,
					right: 1,
					bottom: 1,
					left: 1,
					borderRadius: 4,
					backgroundImage: `linear-gradient(135deg, ${__color__[3]}, ${__color__[1]})`,
				},
			}),
			SVGFilterNoise({}),
			h("div", {
				style: {
					display: "flex",
					position: "absolute",
					top: 1,
					right: 1,
					bottom: 1,
					left: 1,
					justifyContent: "center",
					alignItems: "center",
				},
				children,
			}),
		],
	});
};

export type { IconButtonProps };
export default IconButton;
