import { h } from "~/libs/image";
import type { CSSProperties, Component } from "~/libs/image";

type SVGFilterNoiseProps = {
	style?: CSSProperties;
};

const SVGFilterNoise: Component<SVGFilterNoiseProps> = ({ style = {} }) => {
	return h("svg", {
		viewBox: "0 0 250 250",
		style: {
			position: "absolute",
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			width: "100%",
			height: "100%",
			opacity: 0.1,
			...style,
		},
		children: [
			h("filter", {
				id: "filter-noise",
				children: h("feTurbulence", {
					type: "fractalNoise",
					baseFrequency: "1",
					numOctaves: "3",
					stitchTiles: "stitch",
				}),
			}),
			h("rect", {
				width: "100%",
				height: "100%",
				filter: "url(#filter-noise)",
			}),
		],
	});
};

export default SVGFilterNoise;
