process.env.MODE = "development";

import { describe, it } from "vitest";

import { isOk, isBadRequest, isNotFound } from "~/utils/test";

import * as HOST from "~/utils/host";

import app from "./app";

const fetch = {
	get: (pathname: string) => app.inject({ method: "GET", url: pathname }),
};

describe("app", async () => {
	it("[route] GET /~", async () => {
		const res = isOk(await fetch.get("/~"));
		res.content("application/json; charset=utf-8");
		res.json({
			endpoints: {
				"/env": HOST.IMAGE("~", "env"),
			},
		});
	});
	it("[route] GET /~/env", async () => {
		const res = isOk(await fetch.get("/~/env"));
		res.content("application/json; charset=utf-8");
		res.json({
			MODE: process.env.MODE,
		});
	});

	it("[route] GET /core", async () => {
		const res = isOk(await fetch.get("/core"));
		res.content("application/json; charset=utf-8");
		res.json({
			endpoints: {
				"/button": HOST.IMAGE("core", "button"),
				"/icon-button": HOST.IMAGE("core", "icon-button"),
			},
		});
	});
	it("[route] GET /core/button", async () => {
		const res = isOk(await fetch.get("/core/button"));
		res.headers("x-cache", "false");
		res.content("image/svg+xml");

		const res_cache = isOk(await fetch.get("/core/button"));
		res_cache.content("image/svg+xml");
		res_cache.headers("x-cache", "true");

		const res_query = isOk(await fetch.get("/core/button?color=primary&theme=dark"));
		res_query.content("image/svg+xml");
		res_query.headers("x-cache", "false");

		const res_400_color = isBadRequest(await fetch.get("/core/button?color=unknown"));
		res_400_color.content("application/json; charset=utf-8");

		const res_400_theme = isBadRequest(await fetch.get("/core/button?theme=unknown"));
		res_400_theme.content("application/json; charset=utf-8");
	});
	it("[route] GET /core/icon-button", async () => {
		const res = isOk(await fetch.get("/core/icon-button"));
		res.headers("x-cache", "false");
		res.content("image/svg+xml");

		const res_cache = isOk(await fetch.get("/core/icon-button"));
		res_cache.content("image/svg+xml");
		res_cache.headers("x-cache", "true");

		const res_query = isOk(await fetch.get("/core/icon-button?color=primary&theme=dark"));
		res_query.content("image/svg+xml");
		res_query.headers("x-cache", "false");

		const res_400_color = isBadRequest(await fetch.get("/core/icon-button?color=unknown"));
		res_400_color.content("application/json; charset=utf-8");

		const res_400_theme = isBadRequest(await fetch.get("/core/icon-button?theme=unknown"));
		res_400_theme.content("application/json; charset=utf-8");
	});

	it("[route] GET /", async () => {
		const res = isOk(await fetch.get("/"));
		res.headers("x-me", "flamrdevs");
		res.content("application/json; charset=utf-8");
		res.json({ name: "image" });
	});
	it("[route] GET /not-found", async () => {
		const res = isNotFound(await fetch.get("/not-found"));
		res.content("application/json; charset=utf-8");
		res.json({ message: "Not found" });
	});
});
