import { route, json } from "~/libs/fastify";
import type { RootElement } from "~/libs/image";

import Button from "~/components/core/Button";
import IconButton from "~/components/core/IconButton";
import { ICON_DEFAULT, isSimpleIcons, simpleIcons } from "~/components/icon/simple-icons";

import { COLOR_DEFAULT, THEME_DEFAULT, isColor, isTheme } from "~/styles/utils";

import * as HOST from "~/utils/host";
import { getString } from "~/utils/string";

export default route((fastify, _, done) => {
	const cache = new Map<string, string>();

	const key = (base: string, object: Record<string, string>) =>
		`${base}:${Object.entries(object)
			.map(([key, value]) => `${key}=${value}`)
			.join("&")}`;

	const HEADERS = { "content-type": "image/svg+xml" };

	const image = async (key: string, element: () => RootElement): Promise<string> => {
		let result = cache.get(key);
		if (typeof result !== "string") cache.set(key, (result = await fastify.image(element())));
		return result;
	};

	fastify

		.get("/", async (_, rep) => {
			return json(rep, 200, {
				endpoints: {
					"/button": HOST.IMAGE("core", "button"),
					"/icon-button": HOST.IMAGE("core", "icon-button"),
				},
			});
		})

		.get<{ Querystring: Partial<Record<"color" | "theme" | "text", string>> }>("/button", async (req, rep) => {
			const color = getString(req.query.color, COLOR_DEFAULT);
			const theme = getString(req.query.theme, THEME_DEFAULT);
			const text = getString(req.query.text, "flamrdevs");

			if (!isColor(color)) throw new Error("Invalid color");
			if (!isTheme(theme)) throw new Error("Invalid theme");

			return rep.headers(HEADERS).send(await image(key("button", { color, theme, text }), () => Button({ color, theme, children: text })));
		})

		.get<{ Querystring: Partial<Record<"color" | "theme" | "icon", string>> }>("/icon-button", async (req, rep) => {
			const color = getString(req.query.color, COLOR_DEFAULT);
			const theme = getString(req.query.theme, THEME_DEFAULT);
			const icon = getString(req.query.icon, ICON_DEFAULT);

			if (!isColor(color)) throw new Error("Invalid color");
			if (!isTheme(theme)) throw new Error("Invalid theme");
			if (!isSimpleIcons(icon)) throw new Error("Invalid icon");

			return rep.headers(HEADERS).send(await image(key("icon-button", { color, theme, icon }), () => IconButton({ color, theme, children: simpleIcons[icon]({}) })));
		});

	done();
});
