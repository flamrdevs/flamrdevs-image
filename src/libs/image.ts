import fs from "fs/promises";
import path from "path";

import satori from "satori";
import type { SatoriOptions } from "satori";

type Tag = "div" | "span" | "svg" | (string & {});

type SafeProps<P extends Record<string, any>> = P & { [key: string]: any | undefined };

type SafeCSSValue<T extends string = string> = T | (string & {}) | number;

type CSSProperties = Partial<{
	display: SafeCSSValue<"flex">;
	position: SafeCSSValue<"absolute" | "fixed" | "relative">;
	top: SafeCSSValue;
	right: SafeCSSValue;
	bottom: SafeCSSValue;
	left: SafeCSSValue;
	justifyContent: SafeCSSValue<"center">;
	alignItems: SafeCSSValue<"center">;
	flexDirection: SafeCSSValue<"row" | "column">;
	flexGrow: SafeCSSValue;
	flexShrink: SafeCSSValue;
	flexWrap: SafeCSSValue<"wrap">;
	overflow: SafeCSSValue<"hidden">;
	margin: SafeCSSValue;
	marginTop: SafeCSSValue;
	marginRight: SafeCSSValue;
	marginBottom: SafeCSSValue;
	marginLeft: SafeCSSValue;
	padding: SafeCSSValue;
	paddingTop: SafeCSSValue;
	paddingRight: SafeCSSValue;
	paddingBottom: SafeCSSValue;
	paddingLeft: SafeCSSValue;
	width: SafeCSSValue;
	height: SafeCSSValue;
	borderColor: SafeCSSValue;
	borderStyle: SafeCSSValue<"solid">;
	borderWidth: SafeCSSValue;
	borderRadius: SafeCSSValue;
	backgroundColor: SafeCSSValue;
	backgroundImage: SafeCSSValue;
	color: SafeCSSValue;
	opacity: SafeCSSValue;
	fontFamily: SafeCSSValue;
	fontSize: SafeCSSValue;
	fontStyle: SafeCSSValue<"normal">;
	fontWeight: SafeCSSValue;
}>;
type RootCSSProperties = Omit<CSSProperties, "width" | "height"> & { width: number; height: number };

type Children = string | number | Element | Element[];
type PropsWithChildren<P = {}> = P & { children?: Children };

type Element = { type: Tag; props: SafeProps<{ children?: Children; style?: CSSProperties }> };
type RootElement = { type: Tag; props: SafeProps<{ children: Children; style: RootCSSProperties }> };

type Component<P extends {} = {}> = (props: P) => Element;
type RootComponent<P extends {} = {}> = (props: P) => RootElement;

type ImageFunction = (element: RootElement) => Promise<string>;

const image = async () => {
	const root = (...paths: string[]) => path.resolve(process.cwd(), paths.join("/"));

	const fonts: SatoriOptions["fonts"] = [
		{
			data: await fs.readFile(root("assets/source-code-pro-300.woff")),
			name: "Source Code Pro",
			style: "normal",
			weight: 300,
		},
		{
			data: await fs.readFile(root("assets/source-code-pro-400.woff")),
			name: "Source Code Pro",
			style: "normal",
			weight: 400,
		},
		{
			data: await fs.readFile(root("assets/source-code-pro-500.woff")),
			name: "Source Code Pro",
			style: "normal",
			weight: 500,
		},
		{
			data: await fs.readFile(root("assets/source-code-pro-600.woff")),
			name: "Source Code Pro",
			style: "normal",
			weight: 600,
		},
		{
			data: await fs.readFile(root("assets/source-code-pro-700.woff")),
			name: "Source Code Pro",
			style: "normal",
			weight: 700,
		},
	];

	return (async ({ type, props }) => {
		const { width, height } = props.style;
		(props.style.width = props.style.height = "100%" as unknown as number),
			(props.style.fontFamily = "Source Code Pro"),
			(props.style.fontSize = 16),
			(props.style.fontStyle = "normal"),
			(props.style.fontWeight = 400);

		return await satori({ type, props, key: "image" }, { fonts, width, height });
	}) as ImageFunction;
};

const h = <P extends Record<string, any>>(type: Tag, props: P) => ({ type, props });

export type { Tag, SafeProps, RootCSSProperties, CSSProperties, Children, PropsWithChildren, RootElement, Element, RootComponent, Component, ImageFunction };
export { h };
export default image;
