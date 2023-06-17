import { h } from "~/libs/image";
import type { PropsWithChildren, RootComponent, RootCSSProperties } from "~/libs/image";

import type { Color, Theme } from "~/styles/types";
import { select } from "~/styles/utils";

import SVGFilterNoise from "~/components/misc/SVGFilterNoise";

type ButtonProps = PropsWithChildren<{
	color?: Color;
	theme?: Theme;
	width?: number;
	height?: number;
	style?: RootCSSProperties;
}>;

const WIDTH = 105;
const HEIGHT = 28;

const Button: RootComponent<ButtonProps> = ({ color, theme, width, height, style = {}, children }) => {
	const __color__ = select(color, theme);

	return h("button", {
		style: {
			display: "flex",
			position: "relative",
			overflow: "hidden",
			width: typeof width !== "number" || isNaN(width) || width < WIDTH ? WIDTH : width,
			height: typeof height !== "number" || isNaN(height) || height < HEIGHT ? HEIGHT : height,
			backgroundImage: `linear-gradient(130deg, ${__color__[11]}, ${__color__[8]}, ${__color__[6]})`,
			color: __color__[12],
			borderRadius: "0.25rem",
			...style,
		},
		children: [
			h("div", {
				style: {
					display: "flex",
					position: "absolute",
					top: 1,
					right: 1,
					bottom: 1,
					left: 1,
					overflow: "hidden",
					backgroundImage: `linear-gradient(130deg, ${__color__[3]}, ${__color__[1]})`,
					borderRadius: "0.2rem",
				},
				children: [
					SVGFilterNoise({}),
					h("div", {
						style: {
							display: "flex",
							position: "absolute",
							top: 0,
							right: 0,
							bottom: 0,
							left: 0,
							justifyContent: "center",
							alignItems: "center",
							fontSize: 16,
							fontWeight: 500,
						},
						children,
					}),
				],
			}),
		],
	});
};

export type { ButtonProps };
export default Button;
