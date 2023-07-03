import { route, json, apierror } from "~/libs/fastify";
import cache from "~/libs/cache";
import type { RootElement } from "~/libs/image";
import zod, { firstErrorMessage } from "~/libs/zod";

import Button from "~/components/core/Button";
import IconButton from "~/components/core/IconButton";
import simpleIcons, { IconSchema } from "~/components/icon/simple-icons";

import { ColorSchema, ThemeSchema } from "~/styles/utils";

import * as HOST from "~/utils/host";

export default route((fastify, _, done) => {
	const CoreCache = cache<string>();

	const HEADERS = { "content-type": "image/svg+xml" };

	const getImageKey_mapFn = ([key, value]: [string, any]) => `${key}=${value}`;
	const getImageKey = <T extends Record<string, any>>(name: string, object: T) => `${name}:${Object.entries(object).map(getImageKey_mapFn).join("&")}`;
	const image = async <T extends Record<string, any>>(name: string, object: T, element: (object: T) => RootElement): Promise<{ cache: boolean; result: string }> => {
		const key = getImageKey<T>(name, object);
		const result = CoreCache.get(key);
		if (typeof result === "string") return { cache: true, result };
		return { cache: false, result: CoreCache.set(key, await fastify.image(element(object))) };
	};

	const ButtonQuerySchema = zod.object({ color: ColorSchema, theme: ThemeSchema, text: zod.string().default("flamrdevs") });

	const IconButtonQuerySchema = zod.object({ color: ColorSchema, theme: ThemeSchema, icon: IconSchema });

	fastify

		.get("/", async (_, rep) => {
			return json(rep, 200, {
				endpoints: {
					"/button": HOST.IMAGE("core", "button"),
					"/icon-button": HOST.IMAGE("core", "icon-button"),
				},
			});
		})

		.get("/button", async (req, rep) => {
			const parsedQuery = await ButtonQuerySchema.safeParseAsync(req.query);

			if (parsedQuery.success) {
				const { cache, result } = await image("button", parsedQuery.data, ({ color, theme, text }) => Button({ color, theme, children: text }));
				return rep
					.headers(HEADERS)
					.headers({ "x-cache": `${cache}` })
					.send(result);
			}

			throw apierror(400, firstErrorMessage(parsedQuery, "Invalid query"));
		})

		.get("/icon-button", async (req, rep) => {
			const parsedQuery = await IconButtonQuerySchema.safeParseAsync(req.query);

			if (parsedQuery.success) {
				const { cache, result } = await image("icon-button", parsedQuery.data, ({ color, theme, icon }) => IconButton({ color, theme, children: simpleIcons[icon]({}) }));
				return rep
					.headers(HEADERS)
					.headers({ "x-cache": `${cache}` })
					.send(result);
			}

			throw apierror(400, firstErrorMessage(parsedQuery, "Invalid query"));
		});

	done();
});
